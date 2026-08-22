"use client";

import * as React from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export function Reveal({
  children,
  className,
  delay = 0,
}: RevealProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    if (!ref.current) return;

    try {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => setIsVisible(true), delay * 1000);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );

      observer.observe(ref.current);

      return () => {
        observer.disconnect();
      };
    } catch (error) {
      console.error("IntersectionObserver error:", error);
      // Fallback: always show content if observer fails
      const fallback = setTimeout(() => setIsVisible(true), delay * 1000);
      return () => clearTimeout(fallback);
    }
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`${className} reveal-up ${isVisible ? 'active' : ''}`}
    >
      {children}
    </div>
  );
}