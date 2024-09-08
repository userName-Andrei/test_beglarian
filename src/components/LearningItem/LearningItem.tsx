import React, { FC } from "react";
import UiFlexBox from "../UI/UiFlexBox/UiFlexBox";

import styles from "./LearningItem.module.css";
import DoneIcon from "@/icons/DoneIcon";
import { Tests } from "@/types";

interface LearningItemProps {
  item: Tests;
  onClick?: () => void;
}

const LearningItem: FC<LearningItemProps> = ({ item, onClick }) => {
  return (
    <UiFlexBox
      onClick={onClick}
      className={styles.ball}
      justify="center"
      align="center"
    >
      {item.done && <DoneIcon className={styles.done} />}
      <p className={styles.text}>{item.name}</p>
    </UiFlexBox>
  );
};

export default LearningItem;
