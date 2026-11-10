//encodes scripts/credit-guard.src.js into the two inline guards in index.html
import { readFile, writeFile, access } from 'node:fs/promises'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { dirname, resolve } from 'node:path'

const here = dirname(fileURLToPath(import.meta.url))
const root = resolve(here, '..')
const srcFile = resolve(here, 'credit-guard.src.js')
const htmlFile = resolve(root, 'index.html')
const START = '<!-- site credit:start -->'
const END = '<!-- site credit:end -->'

const exists = await access(srcFile).then(
  () => true,
  () => false,
)
if (!exists) {
  console.error(`credit-build: ${srcFile} is missing.`)
  console.error('The plaintext source is gitignored on purpose. index.html already holds the')
  console.error('last encoded build, so nothing needs regenerating. Restore the source to rebuild.')
  process.exit(1)
}

const mod = await import(pathToFileURL(srcFile).href + '?v=' + Date.now())
const { payload, repair, stamp } = mod

const jsonld = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: payload.site,
  author: {
    '@type': 'Person',
    name: payload.person,
    alternateName: payload.alias,
    jobTitle: payload.role,
    url: payload.href,
  },
  copyrightHolder: { '@type': 'Person', name: payload.person, url: payload.href },
})

const values = {
  P: payload.prefix,
  N: payload.name,
  S: payload.suffix,
  H: payload.href,
  Q: payload.anchor,
  I: payload.id,
  R: payload.root,
  J: jsonld,
}

for (const [key, value] of Object.entries(values)) {
  if (/[^\x20-\x7e]/.test(value)) throw new Error(`credit-build: ${key} must be printable ascii`)
}

function encode(text, salt) {
  const bytes = Buffer.from(text, 'utf8')
  let out = ''
  for (let i = 0; i < bytes.length; i++) {
    const key = ((salt + i * 37) % 251) + 1
    out += (bytes[i] ^ key).toString(36).padStart(2, '0')
  }
  return out
}

function token() {
  const consonants = 'bcdfghjklmnpqrstvwxz'
  const vowels = 'aeiou'
  let name = ''
  for (let i = 0; i < 2; i++) {
    name += consonants[Math.floor(Math.random() * consonants.length)]
    name += vowels[Math.floor(Math.random() * vowels.length)]
  }
  return name + Math.floor(Math.random() * 10)
}

const run = 'z(P,N,S,H,Q,I,R),m(N,H,J)'
const guarded = `try{${run}}catch(e){}`

function body(fn) {
  return fn.toString().replace(/^function\s+\w+\s*/, 'function')
}

const strategies = [
  () =>
    `var arm=function(){try{new MutationObserver(function(){${guarded}}).observe(document.documentElement,{childList:!0,subtree:!0,characterData:!0,attributes:!0,attributeFilter:["href"]})}catch(e){}${guarded}};arm()`,
  () => `var arm=function(){${guarded};setInterval(function(){${guarded}},1300)};arm()`,
  () =>
    `var t=0,arm=function(){var b=function(){var n=Date.now();if(n-t>800){t=n;${guarded}}};["visibilitychange","focus","pageshow","click","scroll","touchstart","keydown"].forEach(function(e){addEventListener(e,b,{passive:!0})});b()};arm()`,
  () =>
    `var t=0,arm=function(){var g=function(n){if(n-t>1700){t=n;${guarded}}requestAnimationFrame(g);${guarded}};requestAnimationFrame(g)};arm()`,
]

function worker(strategy) {
  const salt = 1 + Math.floor(Math.random() * 250)
  const decls = Object.entries(values)
    .map(([key, value]) => `${key}=d("${encode(value, salt)}")`)
    .join(',')
  return [
    `(function ${token()}(){`,
    `var k=${salt},d=function(t){for(var s="",i=0,n,b;i<t.length;i+=2){n=i/2;b=parseInt(t.substr(i,2),36)^(((k+n*37)%251)+1);s+=String.fromCharCode(b)}return s},`,
    decls + ',',
    'z=' + body(repair) + ',',
    'm=' + body(stamp) + ';',
    strategy(),
    '})()',
  ].join('')
}

const blocks = []
for (let i = 0; i < strategies.length; i += 2) {
  const pair = strategies.slice(i, i + 2).map((s) => worker(s))
  blocks.push('<script>\n' + pair.join(';\n') + '\n</script>')
}

const html = await readFile(htmlFile, 'utf8')
const block = [START, ...blocks, END].join('\n    ')
const next = html.includes(START)
  ? html.replace(new RegExp(`${START}[\\s\\S]*?${END}`), block)
  : html.replace('</body>', `    ${block}\n  </body>`)

if (next === html && !html.includes(START)) throw new Error('credit-build: no </body> to anchor to')
await writeFile(htmlFile, next)

const leaks = ['mroctagon', 'Simon Ugorji', 'Spearheaded', 'cf-note'].filter((s) =>
  next.toLowerCase().includes(s.toLowerCase()),
)
console.log(`credit-build: wrote ${blocks.length} guard tags, ${next.length} bytes`)
console.log(leaks.length ? `credit-build: plaintext still present: ${leaks.join(', ')}` : 'credit-build: no plaintext strings in index.html')
