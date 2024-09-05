import React, { FC } from "react";
import { Icon } from "./types";

const RoundArrowRight: FC<Icon> = ({ fill = "#6B2ABC", ...props }) => {
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
        opacity="0.4"
        d="M12 1C5.935 1 1 5.935 1 12C1 18.065 5.935 23 12 23C18.065 23 23 18.065 23 12C23 5.935 18.065 1 12 1Z"
        fill={fill}
      />
      <path
        d="M9.75951 8.94463H14.7189L13.6653 7.89112C13.3467 7.57253 13.3467 7.05753 13.6653 6.73894C13.9839 6.42035 14.499 6.42035 14.8176 6.73894L17.2614 9.18254C17.3372 9.25832 17.3967 9.34789 17.4383 9.44811C17.5206 9.64692 17.5206 9.87193 17.4383 10.0707C17.3967 10.171 17.3372 10.2605 17.2614 10.3363L14.8176 12.7799C14.6587 12.9388 14.45 13.0186 14.2414 13.0186C14.0328 13.0186 13.8242 12.9388 13.6653 12.7799C13.3467 12.4613 13.3467 11.9463 13.6653 11.6277L14.7189 10.5742H9.75951C8.8607 10.5742 8.12976 11.3051 8.12976 12.2038V16.6852C8.12976 17.135 7.7655 17.5 7.31488 17.5C6.86425 17.5 6.5 17.135 6.5 16.6852V12.2038C6.5 10.4064 7.96189 8.94463 9.75951 8.94463Z"
        fill={fill}
      />
    </svg>
  );
};

export default RoundArrowRight;
