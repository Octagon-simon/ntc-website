export default function SectionHeading({ title, description, align = 'left', className = '' }) {
  const alignment = align === 'center' ? 'items-center text-center' : 'items-start text-left'

  return (
    <div className={`flex flex-col gap-4 ${alignment} ${className}`}>
      <span aria-hidden="true" className="h-0.5 w-10 bg-gold-500" />
      <h2 className="font-serif text-3xl font-semibold leading-[1.15] text-primary-900 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-lg leading-relaxed text-primary-800/75">{description}</p>
      )}
    </div>
  )
}
