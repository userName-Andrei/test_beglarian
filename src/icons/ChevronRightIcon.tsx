import React, { FC } from "react";
import { Icon } from "./types";

const ChevronRightIcon: FC<Icon> = ({ fill = "#87898F", ...props }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 2.5C6.76 2.5 2.5 6.76 2.5 12C2.5 17.24 6.76 21.5 12 21.5C17.24 21.5 21.5 17.24 21.5 12C21.5 6.76 17.24 2.5 12 2.5ZM14.71 12.71L11.71 15.71C11.51 15.9 11.26 16 11 16C10.74 16 10.49 15.9 10.29 15.71C9.89998 15.32 9.89998 14.68 10.29 14.29L12.59 12L10.29 9.70996C9.89998 9.31996 9.89998 8.68004 10.29 8.29004C10.68 7.90004 11.32 7.90004 11.71 8.29004L14.71 11.29C15.1 11.68 15.1 12.32 14.71 12.71Z"
        fill={fill}
      />
    </svg>
  );
};

export default ChevronRightIcon;
