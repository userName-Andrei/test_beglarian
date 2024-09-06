import React, { FC } from "react";
import { Icon } from "./types";

const BackArrowIcon: FC<Icon> = ({ fill = "#41416E", ...props }) => {
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
        d="M21.5 12C21.5 12.414 21.164 12.75 20.75 12.75H4.561L10.281 18.47C10.574 18.763 10.574 19.238 10.281 19.531C10.135 19.677 9.943 19.751 9.751 19.751C9.559 19.751 9.36703 19.678 9.22103 19.531L2.22103 12.531C1.92803 12.238 1.92803 11.763 2.22103 11.47L9.22103 4.46999C9.51403 4.17699 9.98901 4.17699 10.282 4.46999C10.575 4.76299 10.575 5.23803 10.282 5.53103L4.56204 11.251H20.75C21.164 11.25 21.5 11.586 21.5 12Z"
        fill={fill}
      />
    </svg>
  );
};

export default BackArrowIcon;
