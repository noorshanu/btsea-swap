"use client";

import { useEffect, useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { FiCornerDownLeft, FiLoader, FiSearch } from "react-icons/fi";


function Token({
  label,
  src,
  active = false,
  setActiveToken = (e) => {},
  onClick,
}) {
  return (
    <button
      onClick={() => {
        setActiveToken(label);
        onClick();
      }}
      className={`${
        active
          ? "sm:border-[#ACFFB9] sm:bg-gradient-to-r sm:from-[#acffb92f] sm:to-[#11ff392b] bg-black text-white"
          : "sm:border-white sm:bg-transparent border-black bg-white"
      } flex gap-3 cursor-pointer items-center justify-between border  group rounded-[30px] p-[6px] hover:bg-black sm:hover:bg-gradient-to-b sm:hover:from-[#acffb92f] sm:hover:to-[#11ff392b]`}
    >
      <div className="">
        <img src={src} alt="" width={38} height={38} />
      </div>
      <h2
        className={`${
          active ? "text-white" : "text-black"
        } text-black  sm:text-white group-hover:text-white font-redHat font-[700] text-xl pr-1`}
      >
        {label}
      </h2>
    </button>
  );
}

function SelectToken({ abi, data, setData, setSelectTokenShow }) {
  let [activeToken, setActiveToken] = useState("ETH");





  return (
    <div className="swappopup" style={{ zIndex: "10000" }}>
      <div className="popContainer w-screen h-screen box sm:w-[550px] sm:h-fit sm:box rounded-[18px] ">
        <div className="flex justify-between px-6 pt-6">
          <div className="">
            <h2 className="text-black sm:text-[#fff] font-moment font-[400] text-xl font-druk">
              Select a token
            </h2>
          </div>

          <div className="CloseBtn bg-black sm:bg-[#343434] rounded-lg pt-[1px] pb-[3px] px-[10px]">
            <button
              className="text-white text-[13px] font-[800]"
              onClick={() => setSelectTokenShow(false)}
            >
              X
            </button>
          </div>
        </div>

        <div className="mt-8">
          <div className="formWrapper">
            <div className="px-6 pb-2">
              <div className="flex items-center gap-3 bg-[#F3F3F3] sm:bg-white rounded-xl py-4 px-3">
                <span className="text-[#747474] text-xl">
                  <FiSearch />
                </span>
                <input
                  value=''
                  onChange={(e) => {
                    setData((prev) => ({ ...prev, address: e.target.value }));
                  }}
                  
                  type="text"
                  placeholder="Search name or paste address"
                  className="w-[100%] text-[#747474] bg-transparent sm:text-[#000] font-redHat"
                />
                <span className="text-[#747474] text-xl">
                <FiCornerDownLeft />
                </span>
              </div>

              <div className="grid grid-cols-4 gap-3 mt-4 ">
                <Token
                  src={"/images/crypto-icons/btc.svg"}
                  active={activeToken === "BTC"}
                  setActiveToken={setActiveToken}
                  label={"BTC"}
                  
                />
                <Token
                  src={"/images/crypto-icons/ethcolor.svg"}
                  active={activeToken == "ETH"}
                  setActiveToken={setActiveToken}
                  label={"ETH"}
             
                />
                <Token
                  src={"/images/crypto-icons/usdt.svg"}
                  active={activeToken == "USDT"}
                  setActiveToken={setActiveToken}
                  label={"USDT"}
                
                />
                <Token
                  src={"/images/crypto-icons/usdc.png"}
                  active={activeToken == "USDC"}
                  setActiveToken={setActiveToken}
                  label={"USDC"}
              
                />
              </div>
            </div>
            <div className="border-b border-[#BEBEBE] sm:border-[#464646] py-2"></div>

            <div className="px-6 py-6">
              <div className="flex items-center justify-between pb-4">
                <div className="flex items-center gap-4 ">
                  <img
                    src="/images/crypto-icons/btc.svg"
                    alt=""
                    width={56}
                    height={56}
                  />
                  <div>
                    <h2 className="text-black sm:text-white font-redHat font-[700] text-xl pr-1 font-druk">
                      Bitcoin
                    </h2>
                    <p className="text-[#7D7D7D] text-base text-[500]">BTC</p>
                  </div>
                </div>
                <span className="text-[#75ff8b] font-redHat font-[700] text-2xl">
                  {activeToken == "BTC" && <AiFillCheckCircle />}
                </span>
              </div>

              <div className="flex items-center justify-between pb-4">
                <div className="flex items-center gap-4 ">
                  <img
                    src="/images/crypto-icons/ethcolor.svg"
                    alt=""
                    width={56}
                    height={56}
                  />
                  <div>
                    <h2 className="text-black sm:text-white font-redHat font-[700] text-xl pr-1 font-druk">
                      Ether
                    </h2>
                    <p className="text-[#7D7D7D] text-base text-[500]">ETH</p>
                  </div>
                </div>
                <span className="text-[#75ff8b] font-redHat font-[700] text-2xl">
                  {activeToken == "ETH" && <AiFillCheckCircle />}
                </span>
              </div>

              <div className="flex items-center justify-between pb-4">
                <div className="flex items-center gap-4 ">
                  <img
                    src="/images/crypto-icons/usdt.svg"
                    alt=""
                    width={56}
                    height={56}
                  />
                  <div>
                    <h2 className="text-black sm:text-white font-redHat font-[700] text-xl pr-1 font-druk">
                      Tether
                    </h2>
                    <p className="text-[#7D7D7D] text-base text-[500]">USDT</p>
                  </div>
                </div>
                <span className="text-[#75ff8b] font-redHat font-[700] text-2xl">
                  {activeToken == "USDT" && <AiFillCheckCircle />}
                </span>
              </div>

              <div className="flex items-center justify-between pb-4">
                <div className="flex items-center gap-4 ">
                  <img
                    src="/images/crypto-icons/usdc.png"
                    alt=""
                    width={56}
                    height={56}
                  />
                  <div>
                    <h2 className="text-black sm:text-white font-redHat font-[700] text-xl pr-1 font-druk">
                      USDC Coin
                    </h2>
                    <p className="text-[#7D7D7D] text-base text-[500]">USDC</p>
                  </div>
                </div>
                <span className="text-[#75ff8b] font-redHat font-[700] text-2xl">
                  {activeToken == "BNB" && <AiFillCheckCircle />}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectToken;
