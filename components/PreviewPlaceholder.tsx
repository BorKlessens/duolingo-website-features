type PreviewPlaceholderProps = {
  label: string;
  variant?: "phone" | "editor" | "wide" | "character";
  className?: string;
};

export function PreviewPlaceholder({
  label,
  variant = "phone",
  className = "",
}: PreviewPlaceholderProps) {
  return (
    <div
      className={`preview-placeholder preview-placeholder--${variant} ${className}`.trim()}
      aria-hidden="true"
    >
      <span className="preview-placeholder__label">{label}</span>
    </div>
  );
}
