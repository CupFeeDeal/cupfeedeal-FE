"use client";

import useViewport from "@hooks/useViewport";

export default function LayoutProvider() {
  useViewport();
  return null;
}
