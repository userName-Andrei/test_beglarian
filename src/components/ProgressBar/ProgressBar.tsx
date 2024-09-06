import React, { FC } from "react";
import styles from "./ProgressBar.module.css";
import UiFlexBox from "../UI/UiFlexBox/UiFlexBox";
import { joinClasses } from "@/utils/joinClasses";

interface ProgressBarProps {
  maxValue: number;
  value: number;
  bars: number;
}

const ProgressBar: FC<ProgressBarProps> = ({ maxValue, value, bars }) => {
  const filledBars = Math.ceil((value / maxValue) * bars);

  return (
    <UiFlexBox align="center" gap={4}>
      {Array(bars)
        .fill(true)
        .map((item, index) => (
          <div
            key={index}
            className={joinClasses(
              styles.bar,
              index < filledBars ? styles.filled : ""
            )}
          ></div>
        ))}
    </UiFlexBox>
  );
};

export default ProgressBar;
