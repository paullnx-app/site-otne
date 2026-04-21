"use client";

import dynamic from "next/dynamic";

const RascunhoView = dynamic(() => import("@/data/RascunhoView"), { ssr: false });

export function RascunhoClient() {
  return <RascunhoView />;
}
