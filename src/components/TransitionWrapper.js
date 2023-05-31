import useDelayUnmount from "../hooks/useDelayUnmount";
import React from "react";

function TransitionWrapper({ open, className, children }) {
  const shouldRender = useDelayUnmount(open, 300);

  return (
    <>
      {shouldRender && (
        <div
          className={`fixed w-full h-full flex justify-center items-center top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-[300] popup-y ${open ? "mount" : "unmount"
            } ${className}`}
        >
          {children}
        </div>
      )}

      {shouldRender && (
        <div
          className={`black-screen-animation z-[200] ${open ? "mount" : "unmount"
            }`}
        ></div>
      )}
    </>
  );
}

export default TransitionWrapper;