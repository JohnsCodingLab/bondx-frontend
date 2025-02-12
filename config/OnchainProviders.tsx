"use client";
import { ReactNode } from "react";
import { OnchainKitProvider } from "@coinbase/onchainkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { base } from "viem/chains";
import { WagmiProvider } from "wagmi";
import { wagmiConfig } from "./wagmi";
import NavBar from "@/components/NavBar";
import "@coinbase/onchainkit/styles.css";

type Props = { children: ReactNode };

const queryClient = new QueryClient();

function OnchainProviders({ children }: Props) {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <OnchainKitProvider
          apiKey="Qhl10GJ7H4pl-rCsUpV6Muygxx_qjjFe"
          chain={base}
        >
          <NavBar />
          {children}
        </OnchainKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default OnchainProviders;
