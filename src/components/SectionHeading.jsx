export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'text-center items-center' : 'text-left items-start'

  return (
    <div className={`flex flex-col gap-3 ${alignment}`}>
      {eyebrow && (
        <span className="text-sm font-semibold uppercase tracking-wider text-gold-600">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-primary-800">
        {title}
      </h2>
      {description && (
        <p className={`text-base sm:text-lg text-primary-700/80 ${align === 'center' ? 'max-w-2xl' : 'max-w-2xl'}`}>
          {description}
        </p>
      )}
    </div>
  )
}
