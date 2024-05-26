"use client";

import { Profiler, ReactNode } from "react";

interface IReactProfilerProviderProps {
  children: ReactNode;
}

const ReactProfilerProvider = ({ children }: IReactProfilerProviderProps) => {
  function onRenderCallback(
    id: string, // "RootLayout"
    phase: "mount" | "update" | "nested-update",
    actualDuration: number, // Time spent rendering the committed update
    baseDuration: number, // Estimated time to render the entire subtree without memoization
    startTime: number, // When React began rendering this update
    commitTime: number, // When React committed this update
    interactions: Set<any>, // Set of interactions belonging to this update
  ) {
    // 성능 데이터를 처리하는 로직
    console.log({
      id,
      phase,
      actualDuration,
      baseDuration,
      startTime,
      commitTime,
      interactions,
    });
  }
  return (
    <Profiler id="ProfilerWrapper" onRender={onRenderCallback}>
      {children}
    </Profiler>
  );
};

export default ReactProfilerProvider;
