import Image, { type StaticImageData } from "next/image";

interface PhoneScreenProps {
  src: StaticImageData;
  alt: string;
  className?: string;
  size?: "default" | "large";
  /** Fixed display height (px) — evens out screens with extra padding in the PNG */
  displayHeight?: number;
  priority?: boolean;
}

export function PhoneScreen({
  src,
  alt,
  className = "",
  size = "default",
  displayHeight,
  priority,
}: PhoneScreenProps) {
  return (
    <div
      className={`phone-screen-image phone-screen-image--${size} ${className}`.trim()}
    >
      <Image
        src={src}
        alt={alt}
        width={src.width}
        height={src.height}
        className="phone-screen-image__img"
        priority={priority}
        sizes={size === "large" ? "(max-width: 900px) 220px, 280px" : "(max-width: 900px) 160px, 200px"}
        style={
          displayHeight
            ? { height: displayHeight, width: "auto", maxWidth: "none" }
            : undefined
        }
      />
    </div>
  );
}
