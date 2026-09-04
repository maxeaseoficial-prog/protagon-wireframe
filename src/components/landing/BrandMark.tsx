/** Frame the transparent original without redrawing or modifying the official mark. */
export function BrandMark({
  className = "",
  eager = false,
}: {
  className?: string;
  eager?: boolean;
}) {
  return (
    <span className={`brand-mark ${className}`}>
      <picture>
        <source srcSet="/uploads/protagon-brand.avif" type="image/avif" />
        <img
          src="/uploads/ChatGPT_Image_4_de_set._de_2026_12_56_34.png"
          alt="Novo Protagon Cuiabá"
          width="1536"
          height="1024"
          loading={eager ? "eager" : "lazy"}
          fetchPriority={eager ? "high" : "auto"}
          decoding="async"
        />
      </picture>
    </span>
  );
}
