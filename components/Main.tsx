import React from "react";

const Main = () => {
  return (
    <>
      <div className="mx-[80px] mt-20">
        <div className="text-right">
          <h1 className="text-white text-6xl font-main">Welcome To</h1>
          <h1 className="text-7xl text-primary font-main">
            Bond<span className="text-8xl text-white">X</span>
          </h1>
        </div>

        <div className="font-main mt-10 text-white">
          <p className="text-3xl mt-4">A decentralized platform</p>
          <p className="text-2xl mt-4">
            for creating, managing and trading tokenized bonds.
          </p>
          <h1 className="text-5xl mt-2">Generate Your</h1>
          <h1 className="text-5xl text-primary">
            Tokens <span className="text-white">Now</span>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Main;
