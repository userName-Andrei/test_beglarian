import React, { FC } from "react";
import { Icon } from "./types";

const PlanIcon: FC<Icon> = ({ fill = "#87898F", ...props }) => {
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
        d="M12 18.75H10C7.932 18.75 6.25 17.068 6.25 15C6.25 12.932 7.932 11.25 10 11.25H14C15.241 11.25 16.25 10.241 16.25 9C16.25 7.759 15.241 6.75 14 6.75H12C11.586 6.75 11.25 6.414 11.25 6C11.25 5.586 11.586 5.25 12 5.25H14C16.068 5.25 17.75 6.932 17.75 9C17.75 11.068 16.068 12.75 14 12.75H10C8.759 12.75 7.75 13.759 7.75 15C7.75 16.241 8.759 17.25 10 17.25H12C12.414 17.25 12.75 17.586 12.75 18C12.75 18.414 12.414 18.75 12 18.75ZM9.5 6C9.5 8.037 7.67998 9.23891 6.47498 10.0349L6.27698 10.166C6.19298 10.222 6.096 10.25 6 10.25C5.904 10.25 5.80702 10.222 5.72302 10.166L5.52502 10.0349C4.32002 9.23891 2.5 8.037 2.5 6C2.5 4.07 4.07 2.5 6 2.5C7.93 2.5 9.5 4.07 9.5 6ZM7.02002 6C7.02002 5.448 6.57202 5 6.02002 5H6.01001C5.45801 5 5.01501 5.448 5.01501 6C5.01501 6.552 5.46802 7 6.02002 7C6.57202 7 7.02002 6.552 7.02002 6ZM21.5 17.25C21.5 19.287 19.68 20.4889 18.475 21.2849L18.277 21.416C18.193 21.472 18.096 21.5 18 21.5C17.904 21.5 17.807 21.472 17.723 21.416L17.525 21.2849C16.32 20.4889 14.5 19.287 14.5 17.25C14.5 15.32 16.07 13.75 18 13.75C19.93 13.75 21.5 15.32 21.5 17.25ZM19.02 17.25C19.02 16.698 18.572 16.25 18.02 16.25H18.01C17.458 16.25 17.015 16.698 17.015 17.25C17.015 17.802 17.468 18.25 18.02 18.25C18.572 18.25 19.02 17.802 19.02 17.25Z"
        fill={fill}
      />
    </svg>
  );
};

export default PlanIcon;
