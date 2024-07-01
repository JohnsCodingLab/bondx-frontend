import React from "react";

const CreateTokenForm = () => {
  return (
    <>
      <div className="text-white font-main mx-[80px] max-sm:mx-5 mt-40">
        <h1 className="text-primary text-lg text-center">Create Token</h1>
        <form className="flex flex-col items-center">
          <div className="flex flex-col mb-5">
            <label className="mb-2">Name:</label>
            <input
              type="text"
              name="tokenName"
              placeholder="Token Name"
              required
              className="w-[500px] max-sm:w-[300px] p-3 rounded-md text-white bg-secondary outline-none"
            />
          </div>

          <div className="flex flex-col mb-5">
            <label className="mb-2">Symbol:</label>
            <input
              type="text"
              name="symbol"
              placeholder="Token Symbool"
              required
              className="w-[500px] max-sm:w-[300px] p-3 rounded-md text-white bg-secondary outline-none"
            />
          </div>

          <div className="flex flex-col mb-5">
            <label className="mb-2">Description</label>
            <textarea
              placeholder="Description"
              name="description"
              rows={5}
              required
              className="w-[500px] max-sm:w-[300px] p-3 rounded-md text-white bg-secondary outline-none"
            />
          </div>

          <div className="flex flex-col mb-5">
            <label className="mb-2">Image</label>
            <input
              type="file"
              name="image"
              placeholder="Image"
              required
              className="w-[500px] max-sm:w-[300px] p-3 rounded-md text-white bg-secondary outline-none"
            />
          </div>

          <div className="flex flex-col mb-5">
            <label className="mb-2">Telegram</label>
            <input
              type="text"
              name="telegram"
              placeholder="Optional"
              className="w-[500px] max-sm:w-[300px] p-3 rounded-md text-white bg-secondary outline-none"
            />
          </div>

          <div className="flex flex-col mb-5">
            <label className="mb-2">Twitter</label>
            <input
              type="text"
              name="twitter"
              placeholder="Optional"
              className="w-[500px] max-sm:w-[300px] p-3 rounded-md text-white bg-secondary outline-none"
            />
          </div>

          <input
            type="submit"
            value="Create Token"
            className="mt-4 mb-20 bg-primary rounded-md py-2 px-4"
          />
        </form>
      </div>
    </>
  );
};

export default CreateTokenForm;
