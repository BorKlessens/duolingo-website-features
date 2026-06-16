import { getWavePath, type WaveVariant } from "./wavePaths";

interface SectionWaveOverlapProps {
  position: "top" | "bottom";
  fill: string;
  variant: WaveVariant;
  className?: string;
  flip?: boolean;
}

export function SectionWaveOverlap({
  position,
  fill,
  variant,
  className = "",
  flip,
}: SectionWaveOverlapProps) {
  const shouldFlip = flip ?? position === "bottom";

  return (
    <div
      className={`section-wave-overlap section-wave-overlap--${position} ${className}`.trim()}
      aria-hidden
    >
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className={shouldFlip ? "section-wave-overlap__svg--flip" : undefined}
      >
        <path d={getWavePath(variant)} fill={fill} />
      </svg>
    </div>
  );
}
