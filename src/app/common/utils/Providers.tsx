import ReduxProvider from "@/redux/utils/ReduxProvider";
import TanstackQueryProvider from "@/tanstackQuery/utils/TanstackQueryProvider";

interface IProviders {
  children: React.ReactNode;
}

const Providers = ({ children }: IProviders) => {
  return (
    <TanstackQueryProvider>
      <ReduxProvider>{children}</ReduxProvider>
    </TanstackQueryProvider>
  );
};

export default Providers;
