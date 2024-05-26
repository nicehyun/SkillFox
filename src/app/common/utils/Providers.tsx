import ReduxProvider from "@/redux/utils/ReduxProvider";
import TanstackQueryProvider from "@/tanstackQuery/utils/TanstackQueryProvider";
import { Profiler } from "react";
import ReactProfilerProvider from "./ReactProfilerProvider";

interface IProviders {
  children: React.ReactNode;
}

const Providers = ({ children }: IProviders) => {
  return (
    <TanstackQueryProvider>
      <ReduxProvider>
        <ReactProfilerProvider>{children} </ReactProfilerProvider>
      </ReduxProvider>
    </TanstackQueryProvider>
  );
};

export default Providers;
