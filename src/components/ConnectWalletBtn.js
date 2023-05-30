import { useWeb3Modal } from "@web3modal/react";
import React, { useEffect } from "react";
import { mainnet, useAccount, useNetwork, useSwitchNetwork } from "wagmi";




function ConnectWalletBtn({
  onClick,
  setShowMediaIcons,
  normal = false,
  title = "Connect",
  style,
}) {
  const { open } = useWeb3Modal();
  const { address } = useAccount();
  
  const { chain } = useNetwork();
  const { switchNetwork } = useSwitchNetwork();



  return (
    <button
      style={style}
      className={`whitespace-nowrap rounded-full cursor-pointer 
      border-2 border-solid border-[#9B02FB]  md:flex py-2 px-6 bg-gradient-to-b  to-[#1B1E4C] from-[#141532] text-sm text-white hover:text-gray-100`}
      onClick={() => {
        if (address && chain.id !== mainnet.id) {
          switchNetwork(mainnet.id);
          return;
        }

        open();

        if (onClick) {
          onClick();
        }
        if (setShowMediaIcons) {
          setShowMediaIcons(false);
        }
      }}
    >
      {address ? null : title}{" "}
      {address && chain.id === mainnet.id ? (
        <>
          {address.slice(0, 3)}...
          {address.slice(address.length - 3, address.length)}{" "}
        </>
      ) : null}
      {address && chain.id !== mainnet.id ? "Switch to ETH Mainnet" : null}
    </button>
  );
}

export default ConnectWalletBtn;