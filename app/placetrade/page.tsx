// import React from 'react'
// import styles from './placetrade.module.css'

// const page = () => {
//   return (
//     <div className={styles.placetrade_container}>
//       page is here
//     </div>
//   )
// }

// export default page

"use client";
import { useCallback } from "react";
import { ConnectAccount } from "@coinbase/onchainkit/wallet";
import {
  Swap,
  SwapAmountInput,
  SwapToggleButton,
  SwapButton,
  SwapMessage,
} from "@coinbase/onchainkit/swap";
import { useAccount, useSendTransaction } from "wagmi";
import type {
  BuildSwapTransaction,
  SwapError,
} from "@coinbase/onchainkit/swap";
import type { Token } from "@coinbase/onchainkit/token";
import Trade from "@/components/Trade";

const page = () => {
  const { address } = useAccount();
  const { sendTransaction } = useSendTransaction();

  const ETHToken: Token = {
    address: "",
    chainId: 8453,
    decimals: 18,
    name: "Ethereum",
    symbol: "ETH",
    image: "https://cdn.coinbase.com/assets/ETH.svg",
  };

  const USDCToken: Token = {
    address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
    chainId: 8453,
    decimals: 6,
    name: "USDC",
    symbol: "USDC",
    image: "https://cdn.coinbase.com/assets/USDC.svg",
  };

  const swappableTokens: Token[] = [ETHToken, USDCToken];

  const onSubmit = useCallback(
    async (swapTransaction: BuildSwapTransaction) => {
      const { transaction } = swapTransaction;
      console.log("Prepared swapTransaction:", transaction);
      // Transaction submission sample code
      const result = await sendTransaction({
        to: transaction.to,
        value: transaction.value,
        data: transaction.data,
      });
    },
    [sendTransaction]
  );

  return (
    <>
      {address ? (
        <div className="mx-auto w-fit">
          <Swap address={address}>
            <SwapAmountInput
              className="text-white cus__class "
              label="Sell"
              swappableTokens={swappableTokens}
              token={ETHToken}
              type="from"
            />
            <SwapToggleButton />
            <SwapAmountInput
              className="text-white cus__class "
              label="Buy"
              swappableTokens={swappableTokens}
              token={USDCToken}
              type="to"
            />
            <SwapButton className="rounded-lg" onSubmit={onSubmit} />
            <SwapMessage />
          </Swap>
        </div>
      ) : (
        <ConnectAccount />
      )}
      ;
      <Trade />
    </>
  );
};

export default page;

