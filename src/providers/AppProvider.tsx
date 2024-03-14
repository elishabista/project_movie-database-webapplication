import React from "react";
import { QueryClient,QueryClientProvider } from "react-query";

const queryClient = new QueryClient();


interface IAppProvider {
  children: React.ReactNode;
}

const AppProvider = ({ children }: IAppProvider) => {
  return (
    <div>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </div>
  );
};

export default AppProvider;
