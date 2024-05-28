"use client";

import { Profiler, ProfilerOnRenderCallback, ReactNode } from "react";

interface IReactProfilerProviderProps {
  id: string;
  children: ReactNode;
}

const ReactProfilerProvider = ({
  children,
  id,
}: IReactProfilerProviderProps) => {
  const onRenderCallback: ProfilerOnRenderCallback = (
    id: string,
    phase: "mount" | "update" | "nested-update",
    actualDuration: number,
    baseDuration: number,
    startTime: number,
    commitTime: number,
  ) => {
    console.log({
      id,
      phase,
      actualDuration,
      baseDuration,
      startTime,
      commitTime,
    });
  };
  return (
    <Profiler id={id} onRender={onRenderCallback}>
      {children}
    </Profiler>
  );
};

export default ReactProfilerProvider;
