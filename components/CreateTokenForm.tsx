import React from "react";
import Main from "./Main";

const CreateTokenForm = () => {
  return (
    <>
      <Main />
      <div className="text-white font-main mx-[80px] mt-40 ">
        <h1 className="text-primary text-lg text-center">Create Token</h1>
        <div className="flex flex-col items-center">
          <div className="flex flex-col mb-5">
            <label className="mb-2">Name:</label>
            <input
              type="text"
              placeholder="Token Name"
              required
              className="w-[500px] max-sm:w-[400px] p-3 rounded-md text-white bg-secondary outline-none"
            />
          </div>

          <div className="flex flex-col mb-5">
            <label className="mb-2">Symbol:</label>
            <input
              type="text"
              placeholder="Token Symbool"
              required
              className="w-[500px] max-sm:w-[400px] p-3 rounded-md text-white bg-secondary outline-none"
            />
          </div>

          <div className="flex flex-col mb-5">
            <label className="mb-2">Initial Supply:</label>
            <input
              type="text"
              placeholder="Initial Supply"
              required
              className="w-[500px] max-sm:w-[400px] p-3 rounded-md text-white bg-secondary outline-none"
            />
          </div>
          <button className="mt-4 mb-20 bg-primary rounded-md py-2 px-4">
            Create Token
          </button>
        </div>
      </div>
    </>
  );
};

export default CreateTokenForm;
