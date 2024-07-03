"use client";

import { AppProgressBar } from "next-nprogress-bar";

const ProgressBar = ({ children }) => {
  return (
    <>
      {children}

      <AppProgressBar
        height="4px"
        color="#2d7edd"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
};

export default ProgressBar;
