"use client";

import { hideNavigation } from "@/redux/features/layoutSlice";
import { useAppDispatch } from "@/redux/hooks";
import { ReactNode } from "react";

interface IInteractiveSectionProps {
  children: ReactNode;
}

const InteractiveSection = ({ children }: IInteractiveSectionProps) => {
  const dispatch = useAppDispatch();
  return (
    <section onClick={() => dispatch(hideNavigation())}>{children}</section>
  );
};

export default InteractiveSection;
