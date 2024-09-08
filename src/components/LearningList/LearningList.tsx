"use client";

import React from "react";
import UiFlexBox from "../UI/UiFlexBox/UiFlexBox";
import LearningItem from "../LearningItem/LearningItem";
import { useTestsStore } from "@/store";
import styles from "./LearningList.module.css";

export const LearningList = () => {
  const { tests, changeItemStatusById, count } = useTestsStore();

  return (
    <UiFlexBox gap={14.6} wrap="wrap" justify="center">
      {count > 0 &&
        tests.map((item) => (
          <LearningItem
            onClick={() => changeItemStatusById(item.id)}
            key={item.id}
            item={item}
          />
        ))}

      {count <= 0 && <p className={styles.text}>Здесь пока ничего нет</p>}
    </UiFlexBox>
  );
};
