export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-gradient">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(800px 240px at 20% -10%, rgba(201,162,39,0.25), transparent 60%)",
        }}
      />
      <div className="container relative py-20 md:py-28">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
          {eyebrow}
        </p>
        <h1 className="text-balance font-serif text-4xl text-white md:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
