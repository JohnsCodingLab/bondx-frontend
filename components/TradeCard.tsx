"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { DataProp } from "@/dummyData";
import Image from "next/image";
import Link from "next/link";

const TradeCard = ({ data }: any) => {
  //   const router = useRouter();
  //   const handleClick = () => {
  //     router.push(`/trade/${data.user}?${data.name}`);
  //   };

  return (
    <>
      <Link href={`/trade/${data.user}?${data.name}`}>
        <div
          className="bg-secondary p-2 text-white rounded-sm hover:bg-opacity-75 cursor-pointer"
          key={data.user}
          // onClick={handleClick}
        >
          <Image
            src="/cat.jpeg"
            alt="eth"
            width={200}
            height={200}
            className="mb-4 w-full"
          />
          <h1 className="text-lg font-semibold">Created By {data.user}</h1>
          <p className="text-primary font-semibold">
            Market cap: {data.marketCap}
          </p>
          <p>
            {data.name}
            <span className="font-semibold">ticker: {data.ticker}:</span>
          </p>
          <p>{data.desc}</p>
        </div>
      </Link>
    </>
  );
};

export default TradeCard;
