import React, { FC } from "react";
import UiFlexBox from "../UI/UiFlexBox/UiFlexBox";

import styles from "./LearningItem.module.css";
import { ILesson } from "@/types";
import DoneIcon from "@/icons/DoneIcon";

interface LearningItemProps {
  item: ILesson;
}

const LearningItem: FC<LearningItemProps> = ({ item }) => {
  return (
    <UiFlexBox className={styles.ball} justify="center" align="center">
      {item.done && <DoneIcon className={styles.done} />}
      <p className={styles.text}>{item.number}</p>
    </UiFlexBox>
  );
};

export default LearningItem;
