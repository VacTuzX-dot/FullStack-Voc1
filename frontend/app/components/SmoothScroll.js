"use client";

import { ReactLenis } from "lenis/react";
import { useEffect, useState } from "react";

export default function SmoothScroll({ children }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Don't render Lenis during SSR to prevent localStorage access issues
  if (!isClient) {
    return <>{children}</>;
  }

  return <ReactLenis root>{children}</ReactLenis>;
}
