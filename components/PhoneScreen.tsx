import type { StaticImageData } from "next/image";

interface PhoneScreenProps {
  src: StaticImageData | string;
  width: number;
  height: number;
  alt: string;
  className?: string;
  size?: "default" | "large";
  /** Fixed display height (px) — evens out screens with extra padding in the PNG */
  displayHeight?: number;
}

export function PhoneScreen({
  src,
  width,
  height,
  alt,
  className = "",
  size = "default",
  displayHeight,
}: PhoneScreenProps) {
  const imgSrc = typeof src === "string" ? src : src.src;

  return (
    <div
      className={`phone-screen-image phone-screen-image--${size} ${className}`.trim()}
    >
      <img
        src={imgSrc}
        alt={alt}
        width={width}
        height={height}
        className="phone-screen-image__img"
        decoding="async"
        style={
          displayHeight
            ? { height: displayHeight, width: "auto", maxWidth: "none" }
            : undefined
        }
      />
    </div>
  );
}
