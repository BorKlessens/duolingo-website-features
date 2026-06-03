import { getWavePath, type WaveVariant } from "./wavePaths";

interface WaveDividerProps {
  fill: string;
  variant: WaveVariant;
  /** Background color of the section above the wave */
  background?: string;
  flip?: boolean;
}

export function WaveDivider({
  fill,
  variant,
  background,
  flip,
}: WaveDividerProps) {
  return (
    <div
      className="wave-divider"
      style={{ background: background ?? "transparent" }}
      aria-hidden
    >
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        style={flip ? { transform: "scaleY(-1)" } : undefined}
      >
        <path d={getWavePath(variant)} fill={fill} />
      </svg>
    </div>
  );
}
