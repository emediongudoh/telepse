"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function ScrollManager() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // If navigating to a hash, let the browser handle it.
    if (typeof window !== "undefined" && window.location.hash) return;

    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname, searchParams]);

  return null;
}
