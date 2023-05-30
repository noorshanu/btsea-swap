import React, { useState } from "react";
import Card from "./Card";

import nftImg1 from "../assets/nft (2).png";
import nftImg2 from "../assets/nft (1).png";
import nftImg3 from "../assets/nft (2).webp";
import nftImg4 from "../assets/nft (3).png";
import nftImg5 from "../assets/nft (4).png";
import nftImg6 from "../assets/nft (5).png";
import nftImg7 from "../assets/nft (6).png";
import nftImg8 from "../assets/bitbear.webp";

const Nfts = [
  {
    id: 1,
    category: "top",
    img: nftImg1,
    title: "CyberPepes",
    price: 0.021,
  },
  {
    id: 2,
    img: nftImg2,
    title: "Ordinal Egg",
    price: 0.32,
    category: "onsale",
  },
  {
    id: 3,
    img: nftImg3,
    title: "Ordinal Artifacts",
    price: 0.034,
    category: "top",
  },
  {
    id: 4,
    img: nftImg4,
    title: "OrdinalFace",
    price: 0.038,
    category: "onsale",
  },
  {
    id: 5,
    img: nftImg5,
    title: "OrdinalPunk",
    price: 0.02,
    category: "Game",
  },
  {
    id: 6,
    img: nftImg6,
    title: "OrdinalSmokes",
    price: 0.028,
    category: "Art",
  },
  {
    id: 7,
    img: nftImg7,
    title: "DarkOrdinauts",
    price: 0.007,
    category: "Game",
  },
  {
    id: 8,
    img: nftImg8,
    title: "BitDefender",
    price: 0.021,
    category: "Photograph",
  },
];

const Cards = () => {
  const [items, setItems] = useState(Nfts);

  const filterItem = (categItem) => {
    const updatedItems = Nfts.filter((curElem) => {
      return curElem.category === categItem;
    });
    setItems(updatedItems);
    console.log(updatedItems);
  };

  return (
    <div className="my-10">
      <div className="flex justify-between items-center mx-auto flex-col sm:flex-row">
        <div className="">
          <h1 className="text-white mt-3 font-bold text-lg">Marketplace</h1>
          <h2 className="items-center text-white opacity-50 text-sm text-soft-blue whitespace-nowrap">
            Buy NFTs, Get Rewards{" "}
          </h2>
        </div>
        <div className="space-x-2 grid  sm:flex grid-cols-2 sm:flex-row mb-3 sm:mb-0 gap-4 mt-3 sm:mt-0">
          {/* border-2 border-solid border-[#9B02FB] */}
          <button
            className="whitespace-nowrap rounded-full cursor-pointer border-transparent
             md:flex py-2 px-6 bg-gradient-to-b  to-[#1B1E4C] from-[#141532] text-sm text-white hover:text-gray-100"
            onClick={() => setItems(Nfts)}
          >
            All
          </button>
          <button
            className="whitespace-nowrap rounded-full cursor-pointer border-transparent
              md:flex py-2 px-6 bg-gradient-to-b  to-[#1B1E4C] from-[#141532] text-sm text-white hover:text-gray-100"
            onClick={() => filterItem("onsale")}
          >
            On Sale
          </button>
          <button
            className="whitespace-nowrap rounded-full cursor-pointer border-transparent
             md:flex py-2 px-6 bg-gradient-to-b  to-[#1B1E4C] from-[#141532] text-sm text-white hover:text-gray-100"
              onClick={() => filterItem("top")}
          >
            Top
          </button>
          <button
            className="whitespace-nowrap rounded-full cursor-pointer border-transparent
              md:flex py-2 px-6 bg-gradient-to-b  to-[#1B1E4C] from-[#141532] text-sm text-white hover:text-gray-100"
              onClick={() => filterItem("Art")}
          >
            Art
          </button>
          <button
            className="whitespace-nowrap rounded-full cursor-pointer border-transparent
               md:flex py-2 px-6 bg-gradient-to-b  to-[#1B1E4C] from-[#141532] text-sm text-white hover:text-gray-100"
              onClick={() => filterItem("Game")}
          >
            Game
          </button>
          <button
            className="whitespace-nowrap rounded-full cursor-pointer border-transparent
              md:flex py-2 px-6 bg-gradient-to-b  to-[#1B1E4C] from-[#141532] text-sm text-white hover:text-gray-100"
              onClick={() => filterItem("Photograph")}
          >
            Photography
          </button>

          {/* <a
            href="/Wallet"
            className={`flex items-center whitespace-nowrap rounded-full cursor-pointer w-fit py-2 px-6 bg-[#2E3154] text-sm text-white hover:text-gray-100`}
          >
            <img src={filterIcon} className="mr-1 h-4 w-4" alt="" />
            Filter
          </a> */}
        </div>
      </div>
      <div className="mt-10 mx-auto">
        <div className="my-1 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          {items.map((nftData) => {
            return <Card nftData={nftData} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Cards;
