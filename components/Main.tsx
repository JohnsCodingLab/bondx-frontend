import React from "react";

const Main = () => {
  return (
    <>
      <div className="mx-[80px] max-lg:mx-5 mt-20">
        <div className="text-right max-sm:text-left">
          <h1 className="text-white text-6xl font-main max-sm:text-4xl">
            Welcome To
          </h1>
          <h1 className="text-7xl max-sm:text-5xl text-primary font-main">
            Bond<span className="max-sm:text-6xl text-8xl text-white">X</span>
          </h1>
        </div>

        <div className="font-main mt-10 text-white max-sm:text-right">
          <p className="text-3xl max-sm:text-xl mt-4">
            A decentralized platform
          </p>
          <p className="text-2xl max-sm:text-xl mt-4">
            for creating, managing and trading tokenized bonds.
          </p>
          <h1 className="text-5xl mt-2 max-sm:text-3xl">Generate Your</h1>
          <h1 className="text-5xl max-sm:text-4xl text-primary">
            Tokens <span className="text-white">Now</span>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Main;
