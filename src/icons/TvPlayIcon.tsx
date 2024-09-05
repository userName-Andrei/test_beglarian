import React, { FC } from "react";
import { Icon } from "./types";

interface TvPlayIconProps extends Icon {
  triangleFill?: string;
}

const TvPlayIcon: FC<TvPlayIconProps> = ({
  fill = "#6B2ABC",
  triangleFill = "#25314C",
  ...props
}) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 18H18C20 18 21 16.923 21 14.769V7.22998C21 5.07598 20 3.99902 18 3.99902H6C4 3.99902 3 5.07598 3 7.22998V14.769C3 16.923 4 18 6 18Z"
        fill={fill}
      />
      <path
        d="M17 21.75H7C6.586 21.75 6.25 21.414 6.25 21C6.25 20.586 6.586 20.25 7 20.25H17C17.414 20.25 17.75 20.586 17.75 21C17.75 21.414 17.414 21.75 17 21.75Z"
        fill={fill}
      />
      <path
        d="M14.582 10.2538L11.4331 8.32681C10.8061 7.94381 10 8.39289 10 9.12589V12.873C10 13.606 10.8061 14.056 11.4331 13.672L14.582 11.745C15.139 11.404 15.139 10.5958 14.582 10.2538Z"
        fill={triangleFill}
      />
    </svg>
  );
};

export default TvPlayIcon;
