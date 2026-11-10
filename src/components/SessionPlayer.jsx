import { useState } from 'react'
import { PlayIcon } from './icons.jsx'

export default function SessionPlayer({ session, className = '' }) {
  const [playing, setPlaying] = useState(false)

  if (playing) {
    return (
      <div className={`overflow-hidden rounded-md bg-black ${className}`}>
        <video
          className="h-full w-full object-contain"
          src={session.src}
          poster={session.poster}
          controls
          autoPlay
          playsInline
        />
      </div>
    )
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`Play ${session.title}`}
      className={`group relative block overflow-hidden rounded-md bg-primary-900 text-left cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 ${className}`}
    >
      <img
        src={session.poster}
        alt=""
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />
      <span
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-900/30 to-primary-900/5"
      />
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-primary-900/75 to-transparent"
      />
      <span className="absolute left-4 top-4 text-xs font-semibold uppercase tracking-[0.18em] text-gold-200">
        {session.kind}
      </span>
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-500 text-primary-900 transition-transform duration-200 group-hover:scale-110">
          <PlayIcon className="h-6 w-6" />
        </span>
      </span>
      <span className="absolute inset-x-0 bottom-0 flex flex-col gap-1 p-5">
        <span className="font-serif text-lg font-semibold text-white">{session.title}</span>
        <span className="text-sm text-primary-100/85">{session.description}</span>
      </span>
    </button>
  )
}
