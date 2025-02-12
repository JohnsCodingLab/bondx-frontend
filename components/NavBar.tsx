"use client";
import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import WalletModal from "./WalletModal";
import { WalletComponents } from "./WalletComponents";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);

  return (
    <>
      <div className="mx-[80px] max-lg:mx-5">
        <div className="flex items-center justify-between py-5 text-white">
          <h1 className="font-main font-bold text-primary text-4xl max-sm:text-2xl">
            Bond<span className="text-white text-5xl max-sm:text-3xl">X</span>
          </h1>
          <ul className="flex items-center justify-between gap-5 text-slate-300 max-lg:hidden bg-secondary px-10 py-3 rounded-md font-main">
            <li className="hover:text-primary">
              <a href="/">Home</a>
            </li>
            <li className="hover:text-primary">
              <a href="/token">Create Token</a>
            </li>
            <li className="hover:text-primary">
              <a href="/trade">Trade</a>
            </li>
            <li className="hover:text-primary">
              <a href="/swap">Swap</a>
            </li>
            <li className="hover:text-primary">
              <a href="/shill">Shill</a>
            </li>
          </ul>
          <WalletComponents />

          <WalletModal onClose={closeModal} isVisible={isModalVisible} />
          <IoMdMenu
            size={30}
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>

        <div
          className={`${
            isOpen
              ? "lg:hidden absolute top-0 bg-primary h-screen w-[80%] pt-5 px-2 block animate-slideIn"
              : "hidden animate-slideOut"
          }`}
        >
          <ul className="gap-10 text-white font-main tracking-wider ">
            <li className="hover:text-white mt-8 mb-2 hover:bg-secondary p-3">
              <a href="/">Home</a>
            </li>
            <li className="hover:text-white mb-2 hover:bg-secondary p-3">
              <a href="/token">Create Token</a>
            </li>
            <li className="hover:text-white mb-2 hover:bg-secondary p-3">
              <a href="/trade">Trade</a>
            </li>
            <li className="hover:text-white mb-2 hover:bg-secondary p-3">
              <a href="/swap">Swap</a>
            </li>
            <li className="hover:text-white mb-2 hover:bg-secondary p-3">
              <a href="/shill">Shill</a>
            </li>
          </ul>
          <button
            onClick={openModal}
            className="py-2 px-8 border border-secondary md:hidden text-white rounded-sm font-main mt-5 hover:bg-secondary"
          >
            Connect Wallet
          </button>
          <WalletModal onClose={closeModal} isVisible={isModalVisible} />
        </div>
      </div>
    </>
  );
};

export default NavBar;