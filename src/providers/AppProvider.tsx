import React from "react";
import { QueryClient,QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      retry: false,
    },
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      staleTime: 5 * 1000,
    },
  },
});


interface IAppProvider {
  children: React.ReactNode;
}

const AppProvider = ({ children }: IAppProvider) => {
  return (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default AppProvider;
