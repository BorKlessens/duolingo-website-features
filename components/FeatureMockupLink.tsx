import type { ReactNode } from "react";

type FeatureMockupLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export function FeatureMockupLink({
  href,
  children,
  className = "",
}: FeatureMockupLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-green feature-mockup-link ${className}`.trim()}
    >
      {children}
    </a>
  );
}
