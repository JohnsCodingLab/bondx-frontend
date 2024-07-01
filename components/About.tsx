import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <>
      <div className="p-5 mt-24 mb-10 mx-[80px] max-lg:mx-5 text-white">
        <h1 className="font-main text-2xl text-center font-semibold mb-10">
          How it Works
        </h1>
        <p className="text-center max-sm:text-justify leading-7">
          The process begins with deploying the MyTokenRouter contract, which
          serves as the initial deployment mechanism. The routers deployToken
          function creates an instance of the MyToken contract, taking the
          initial owner, Uniswap V2 router address, token name, and ticker as
          parameters. Inside the MyToken contract, the Uniswap V2 router is set,
          and a liquidity pair with WETH is created through the Uniswap V2
          factory. An initial supply of tokens is minted to the specified owner.
          This setup facilitates seamless integration with Uniswap for liquidity
          provision and allows the token owner to mint additional tokens as
          needed.
        </p>
        <Image
          src="/coin4.png"
          alt="coin"
          width={400}
          height={400}
          className="md:hidden"
        />
      </div>

      <div className="mx-[100px] max-sm:mx-5 grid lg:grid-cols-3 gap-5 mb-20">
        <div className="p-5 border-bcolor bg-secondary rounded-lg">
          <h1 className="text-white mb-2 font-semibold">
            pick a coin that you like
          </h1>
          <p className="text-grey text-sm">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          </p>
        </div>

        <div className="p-5 border-bcolor bg-secondary rounded-lg">
          <h1 className="text-white mb-2 font-semibold">
            buy the coin on the bonding curve
          </h1>
          <p className="text-grey text-sm">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          </p>
        </div>

        <div className="p-5 border-bcolor bg-secondary rounded-lg">
          <h1 className="text-white mb-2 font-semibold">
            sell at any time to lock in your profits or losses
          </h1>
          <p className="text-grey text-sm">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
