import React, { FC } from "react";
import UiSection from "../UI/UiSection/UiSection";
import UiFlexBox from "../UI/UiFlexBox/UiFlexBox";
import IconBoxRound from "../UI/IconBoxRound/IconBoxRound";
import CapIcon from "@/icons/CapIcon";
import ChevronRightIcon from "@/icons/ChevronRightIcon";

import styles from "./LessonBlock.module.css";
import { LearningProgress } from "../LearningProgress/LearningProgress";
import Link from "next/link";

interface LessonBlockProps {
  name: string;
  category: string;
}

const LessonBlock: FC<LessonBlockProps> = ({ name, category }) => {
  return (
    <UiSection className={styles.block} size="big">
      <UiFlexBox className={styles.lesson} col gap={16}>
        <Link href={"/tests"}>
          <UiFlexBox justify="space-between">
            <UiFlexBox gap={16} grow>
              <IconBoxRound
                className={styles.capIcon}
                iconJSX={<CapIcon />}
                width={58}
                backgroundColor="#FFE3DD"
                backgroundOpacity={0.5}
              />
              {/* It would be possible to do align: center, but then when the text overflows, the icons will be in the center */}
              <UiFlexBox className={styles.lesson_text} col>
                <p className={styles.lesson_name}>{name}</p>
                <p className={styles.lesson_category}>{category}</p>
              </UiFlexBox>
            </UiFlexBox>
            <ChevronRightIcon className={styles.chevron} />
          </UiFlexBox>
        </Link>
        <LearningProgress />
      </UiFlexBox>
    </UiSection>
  );
};

export default LessonBlock;
