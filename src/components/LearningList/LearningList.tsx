"use client";

import React from "react";
import UiFlexBox from "../UI/UiFlexBox/UiFlexBox";
import LearningItem from "../LearningItem/LearningItem";
import { useTestsStore } from "@/store";

export const LearningList = () => {
  const { tests } = useTestsStore();

  console.log(tests);
  return (
    <UiFlexBox gap={14.6} wrap="wrap">
      {tests.map((item) => (
        <LearningItem
          onClick={() => console.log(item.id)}
          key={item.id}
          item={item}
        />
      ))}
    </UiFlexBox>
  );
};
