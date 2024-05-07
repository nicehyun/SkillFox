"use client";

import { ReactNode } from "react";

import store from "..";
import { Provider } from "react-redux";

interface IReduxProvider {
  children: ReactNode;
}

const ReduxProvider = ({ children }: IReduxProvider) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
