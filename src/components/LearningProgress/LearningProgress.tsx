import React from "react";
import styles from "./LearningProgress.module.css";
import UiFlexBox from "../UI/UiFlexBox/UiFlexBox";
import ProgressBar from "../ProgressBar/ProgressBar";

const LearningProgress = () => {
  const completed = 112;
  const all = 730;
  return (
    <UiFlexBox col gap={8}>
      <p className={styles.info}>
        {completed} questions out of {all} passed
      </p>
      <ProgressBar maxValue={all} value={completed} bars={7} />
    </UiFlexBox>
  );
};

export default LearningProgress;
