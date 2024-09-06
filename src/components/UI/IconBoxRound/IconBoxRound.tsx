import React, { FC, HTMLAttributes } from "react";
import UiFlexBox from "../UiFlexBox/UiFlexBox";
import styles from "./IconBoxRound.module.css";
import { joinClasses } from "@/utils/joinClasses";

interface IconBoxRoundProps {
  className?: string;
  iconJSX: React.ReactNode;
  // backgroundColor HEX
  backgroundColor?: string;
  backgroundOpacity?: number;
  width?: number;
  style?: React.CSSProperties;
}

const IconBoxRound: FC<IconBoxRoundProps> = ({
  className,
  iconJSX,
  backgroundColor,
  backgroundOpacity = 1,
  width = 40,
  style,
}) => {
  const classNames = joinClasses(className, styles.box);
  const wrapperStyles: React.CSSProperties = {
    width: width,
    height: width,
    ...style,
  };

  return (
    <UiFlexBox
      className={classNames}
      justify="center"
      align="center"
      style={wrapperStyles}
    >
      <div
        className={styles.background}
        style={{ backgroundColor, opacity: backgroundOpacity }}
      ></div>
      <div className={styles.icon}>{iconJSX}</div>
    </UiFlexBox>
  );
};

export default IconBoxRound;
