interface AssetSlotProps {
  /** Identifier for which asset belongs here (e.g. hero-character-left) */
  name: string;
  className?: string;
}

/** Empty placeholder — add your image/SVG via CSS background or replace with <img> */
export function AssetSlot({ name, className = "" }: AssetSlotProps) {
  return (
    <div
      className={`asset-slot ${className}`.trim()}
      data-asset={name}
      role="img"
      aria-label={`Asset: ${name}`}
    />
  );
}
