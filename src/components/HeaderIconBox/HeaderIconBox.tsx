import React, { FC, HTMLAttributes } from "react";
import UiFlexBox from "../UI/UiFlexBox/UiFlexBox";
import styles from "./HeaderIconBox.module.css";
import { joinClasses } from "@/utils/joinClasses";

interface HeaderIconBoxProps {
  iconJSX?: React.ReactNode;
  text?: string | number;
}

const HeaderIconBox: FC<HeaderIconBoxProps> = ({ iconJSX, text }) => {
  const classNames = joinClasses(
    styles.box,
    text ? styles.box_text : undefined
  );

  return (
    <UiFlexBox className={classNames} justify="center" align="center" gap={4}>
      {iconJSX && iconJSX}
      {text && <span className={styles.text}>{text}</span>}
    </UiFlexBox>
  );
};

export default HeaderIconBox;
