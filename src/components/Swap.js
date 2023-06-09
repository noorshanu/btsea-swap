import React, { useState } from "react";
import { FiSettings } from "react-icons/fi";
import { FaBitcoin } from "react-icons/fa";
import { BsArrowDownShort } from "react-icons/bs";
import { AiOutlineSwap } from "react-icons/ai";
import "./Modal.css";
import SelectToken from "./SelectToken";
import TransitionWrapper from "./TransitionWrapper";

function Swap() {
  const [selectToken1Show, setSelectToken1Show] = useState(false);
  let [swapValues, setSwapValues] = useState([0.00, 5032.72]);
  return (
    <>
     <div className="box w-full sm:w-[450px] h-auto flex flex-col  mx-auto  p-5 rounded-2xl self-center">
      <div className="flex justify-between items-center">
        <div className="flex gap-x-4 text-white">
          <span className="cursor-pointer hover:opacity-100 font-bold opacity-70 font-druk">
            Buy
          </span>
          <span className="cursor-pointer hover:opacity-100 font-bold opacity-70 font-druk">
            Swap
          </span>
        </div>
        <div>
          <FiSettings className="text-white cursor-pointer" size={25} />
        </div>
      </div>
      <div className="bg-black  mt-7 border border-white transition-all duration-300 border-opacity-30 hover:border-opacity-100 w-full rounded-xl flex py-3 px-3">
        <input
          type="number"
          className="bg-transparent w-[100%] sm:flex-grow outline-none text-white mr-2 font-druk"
          placeholder="0.00"
          value={swapValues[0]}
          onChange={(e) =>
            setSwapValues((currentValues) => [e.target.value, currentValues[1]])
          }
        />
        <span className="text-[#9006EE] font-bold opacity-90 hover:opacity-100 cursor-pointer font-druk">
          Max
        </span>
        <div className="h-full w-[0.5px] bg-gray-400 bg-opacity-80 mx-4" />
        <div className="flex gap-x-3 font-bold text-white font-druk"  onClick={() => setSelectToken1Show(true)}>
          <FaBitcoin size={25} className="  fill-white " />
          BTC
        </div>
        <button className="ml-3" onClick={() => setSelectToken1Show(true)}>
          <BsArrowDownShort color="white" size={25} className="" />
        </button>
      </div>
      <button onClick={()=>{
        setSwapValues(currentValues=>[currentValues[1], currentValues[0]])
      }} className="border border-[#4527A5] my-3 hover:border-[white] scale-105 transition-all bg- p-2 rounded-xl w-fit">
        <AiOutlineSwap className="text-white rotate-90" size={25} />
      </button>
      <div className="bg-black  mb-7 border border-white transition-all duration-300 border-opacity-30 hover:border-opacity-100 w-full rounded-xl flex py-3 px-3">
        <input
          type="number"
          className="bg-transparent w-[100%] sm:flex-grow outline-none text-white mr-2 font-druk"
          placeholder="0.00"
          onChange={(e) =>
            setSwapValues((currentValues) => [currentValues[0], e.target.value])
          }
          value={swapValues[1]}
        />
        <div className="h-full w-[0.5px] bg-gray-400 bg-opacity-80 mx-4" />
        <div className="flex gap-x-3 font-bold text-white font-druk" onClick={() => setSelectToken1Show(true)}>
          <FaBitcoin size={25} className="  fill-white " />
          BTC
        </div>
        <button className="ml-3" onClick={() => setSelectToken1Show(true)}>
          <BsArrowDownShort color="white" size={25} className="" />
        </button>
      </div>
      <div className="w-full font-druk cursor-pointer border border-transparent hover:border-white transition-all duration-300 btn-gradient flex justify-center items-center font-bold text-white rounded-xl py-3 px-4">
        Swap
      </div>
    </div>
    <TransitionWrapper open={selectToken1Show}>
    <SelectToken
         
          setSelectTokenShow={setSelectToken1Show}
        />
        </TransitionWrapper>
    </>
   
  );
}

export default Swap;
