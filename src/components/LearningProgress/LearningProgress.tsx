"use client";

import React from "react";
import styles from "./LearningProgress.module.css";
import UiFlexBox from "../UI/UiFlexBox/UiFlexBox";
import ProgressBar from "../ProgressBar/ProgressBar";
import { useTestsStore } from "@/store";

export const LearningProgress = () => {
  const { count, doneCount } = useTestsStore();
  return (
    <UiFlexBox col gap={8}>
      <p className={styles.info}>
        {doneCount} questions out of {count} passed
      </p>
      <ProgressBar value={doneCount} maxValue={count} bars={7} />
    </UiFlexBox>
  );
};
