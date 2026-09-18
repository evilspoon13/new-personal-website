import type { CSSProperties, ElementType, ReactNode } from "react";
import { useInView } from "../hooks/useInView";

interface RevealProps {
  children: ReactNode;
  /** Stagger position — each step adds 60ms. */
  index?: number;
  delay?: number;
  as?: ElementType;
  className?: string;
  id?: string;
}

export default function Reveal({
  children,
  index = 0,
  delay,
  as: Tag = "div",
  className = "",
  id,
}: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <Tag
      ref={ref}
      id={id}
      data-shown={inView}
      className={`reveal ${className}`}
      style={{ "--reveal-delay": `${delay ?? index * 60}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
