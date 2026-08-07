import { useInView } from '../hooks/useInView.js'

export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...props }) {
  const [ref, inView] = useInView()

  return (
    <Tag
      ref={ref}
      className={[
        'transition-all duration-500 ease-out',
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
        className,
      ].join(' ')}
      style={{ transitionDelay: inView ? `${delay}ms` : '0ms' }}
      {...props}
    >
      {children}
    </Tag>
  )
}
