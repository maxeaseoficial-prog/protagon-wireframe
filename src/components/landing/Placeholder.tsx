export function Placeholder({
  label,
  className = "aspect-[16/9]",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`flex w-full items-center justify-center rounded-md border border-dashed border-border bg-muted p-4 text-center text-xs font-medium tracking-wide text-muted-foreground sm:text-sm ${className}`}
    >
      {label}
    </div>
  );
}

export function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-20 border-b border-border py-12 sm:py-16 ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">{children}</div>
    </section>
  );
}
