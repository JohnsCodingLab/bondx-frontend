import React from "react";
import { ModalProps } from "@/types";
import WalletComponents from "./WalletComponents";
import Image from "next/image";

const WalletModal = ({ isVisible, onClose }: ModalProps) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-secondary p-6 rounded w-96 relative">
        <p className="text-2xl">Choose Wallet</p>
        <button
          onClick={onClose}
          className="text-4xl absolute top-2 right-2 text-gray-400 hover:text-gray-600"
        >
          &times;
        </button>
        <div className="bg-bcolor rounded-lg p-3 gap-2 cursor-pointer flex items-center mt-10">
          <Image src="/base.png" alt="logo" width={20} height={20} />
          <p>Coinbase</p>
        </div>

        <div className="bg-bcolor rounded-lg p-3 gap-2 cursor-pointer flex items-center mt-5">
          <Image src="/metamask.png" alt="logo" width={20} height={20} />
          <p>MetaMask</p>
        </div>

        <div className="bg-bcolor rounded-lg p-3 gap-2 cursor-pointer flex items-center mt-5">
          <Image src="/okx.png" alt="logo" width={20} height={20} />
          <p>OKX</p>
        </div>
      </div>
    </div>
  );
};

export default WalletModal;
