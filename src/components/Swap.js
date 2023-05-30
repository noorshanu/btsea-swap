import React from "react";
import ConnectWalletBtn from "./ConnectWalletBtn";

function Swap() {
  return (
    <section className="flex justify-center items-center">
      <div>
        <div className="text-white swap-box w-[400px] p-4">
          <div className="flex justify-between">
            <div className="flex gap-5">
              <h2>SWAP</h2>
              <h2>BUY</h2>
            </div>
            <h2>Setting</h2>
          </div>
          <div>
            input box 1
          </div>
          <div>
            input box-2
          </div>
          <div className="mx-auto text-center flex justify-center">

          <ConnectWalletBtn/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Swap;
