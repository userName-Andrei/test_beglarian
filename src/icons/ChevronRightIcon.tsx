import React, { FC } from "react";
import { Icon } from "./types";

const ChevronRightIcon: FC<Icon> = ({ fill = "#87898F", ...props }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10 0.5C4.76 0.5 0.5 4.76 0.5 10C0.5 15.24 4.76 19.5 10 19.5C15.24 19.5 19.5 15.24 19.5 10C19.5 4.76 15.24 0.5 10 0.5ZM12.71 10.71L9.71002 13.71C9.51002 13.9 9.26 14 9 14C8.74 14 8.48998 13.9 8.28998 13.71C7.89998 13.32 7.89998 12.68 8.28998 12.29L10.59 10L8.28998 7.70996C7.89998 7.31996 7.89998 6.68004 8.28998 6.29004C8.67998 5.90004 9.32002 5.90004 9.71002 6.29004L12.71 9.29004C13.1 9.68004 13.1 10.32 12.71 10.71Z"
        fill={fill}
      />
    </svg>
  );
};

export default ChevronRightIcon;
