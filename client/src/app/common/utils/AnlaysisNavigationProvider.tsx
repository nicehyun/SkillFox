"use client";

import { hideNavigation } from "@/redux/features/layoutSlice";
import { useAppDispatch } from "@/redux/hooks";
import { ReactNode, useEffect } from "react";

interface IAnlaysisNavigationProviderProps {
  children: ReactNode;
}

const AnlaysisNavigationProvider = ({
  children,
}: IAnlaysisNavigationProviderProps) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(hideNavigation());
  }, []);
  return <>{children}</>;
};

export default AnlaysisNavigationProvider;
