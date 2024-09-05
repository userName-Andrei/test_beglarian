import React, { FC } from "react";
import { Icon } from "./types";

const LexamIcon: FC<Icon> = ({ fill = "#FF2045", ...props }) => {
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
        d="M20.3379 16.7145V21.2921C20.3379 21.6791 20.017 22 19.63 22H4.92495C4.53798 22 4.21707 21.6791 4.21707 21.2921V2.70788C4.21707 2.32091 4.53798 2 4.92495 2H10.6682C11.0599 2 11.3761 2.32091 11.3761 2.70788V16.0066H19.63C20.017 16.0066 20.3379 16.3228 20.3379 16.7145Z"
        fill={fill}
      />
    </svg>
  );
};

export default LexamIcon;
