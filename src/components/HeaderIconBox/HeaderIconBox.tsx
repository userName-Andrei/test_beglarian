import React, { FC, HTMLAttributes } from "react";
import UiFlexBox from "../UI/UiFlexBox/UiFlexBox";
import styles from "./HeaderIconBox.module.css";
import { joinClasses } from "@/utils/joinClasses";

interface HeaderIconBoxProps {
  iconJSX?: React.ReactNode;
  text?: string | number;
}

const HeaderIconBox: FC<HeaderIconBoxProps> = ({ iconJSX, text }) => {
  return (
    <UiFlexBox
      className={joinClasses(styles.box, String(text) && styles.box_text)}
      justify="center"
      align="center"
    >
      {iconJSX && iconJSX}
      {text && <span className={styles.text}>{text}</span>}
    </UiFlexBox>
  );
};

export default HeaderIconBox;
