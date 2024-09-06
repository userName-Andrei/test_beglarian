"use client";

import React, { useState } from "react";
import UiFlexBox from "../UI/UiFlexBox/UiFlexBox";
import LearningItem from "../LearningItem/LearningItem";
import { ILesson } from "@/types";

const LearningList = () => {
  const [lessons, setLessons] = useState<ILesson[]>([
    {
      id: 1,
      number: 1,
      done: false,
    },
    {
      id: 2,
      number: 2,
      done: false,
    },
    {
      id: 3,
      number: 3,
      done: false,
    },
    {
      id: 4,
      number: 4,
      done: false,
    },
    {
      id: 5,
      number: 5,
      done: false,
    },
    {
      id: 6,
      number: 6,
      done: false,
    },
    {
      id: 7,
      number: 7,
      done: false,
    },
    {
      id: 8,
      number: 8,
      done: true,
    },
    {
      id: 9,
      number: 9,
      done: false,
    },
    {
      id: 10,
      number: 10,
      done: false,
    },
    {
      id: 11,
      number: 11,
      done: false,
    },
    {
      id: 12,
      number: 12,
      done: false,
    },
    {
      id: 13,
      number: 13,
      done: false,
    },
    {
      id: 14,
      number: 14,
      done: false,
    },
    {
      id: 15,
      number: 15,
      done: false,
    },
    {
      id: 16,
      number: 16,
      done: false,
    },
    {
      id: 17,
      number: 17,
      done: false,
    },
    {
      id: 18,
      number: 18,
      done: false,
    },
    {
      id: 19,
      number: 19,
      done: false,
    },
    {
      id: 20,
      number: 20,
      done: false,
    },
  ]);

  return (
    <UiFlexBox gap={14.6} wrap="wrap">
      {lessons.map((item) => (
        <LearningItem key={item.id} item={item} />
      ))}
    </UiFlexBox>
  );
};

export default LearningList;
