import React, { FC, HTMLAttributes } from "react";
import styles from "./UiSection.module.css";
import { joinClasses } from "@/utils/joinClasses";

interface UiSectionProps extends HTMLAttributes<HTMLDivElement> {
  size: "big" | "medium" | "small";
  children: React.ReactNode;
}

const UiSection: FC<UiSectionProps> = ({
  children,
  size = "medium",
  ...props
}) => {
  const classNames = joinClasses(styles.section, styles[size]);
  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  );
};

export default UiSection;
