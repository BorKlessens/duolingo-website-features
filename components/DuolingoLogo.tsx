import { AssetSlot } from "./AssetSlot";

interface DuolingoLogoProps {
  variant?: "dark" | "light";
}

export function DuolingoLogo({ variant = "dark" }: DuolingoLogoProps) {
  const textColor = variant === "light" ? "#ffffff" : "#3c3c3c";

  return (
    <a href="#" className="duolingo-logo" aria-label="Duolingo home">
      <AssetSlot name="logo-icon" className="duolingo-logo__icon" />
      <span
        className="duolingo-logo__wordmark"
        style={{ color: textColor }}
      >
        duolingo
      </span>
    </a>
  );
}
