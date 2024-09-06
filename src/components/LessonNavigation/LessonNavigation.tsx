import React from "react";
import UiFlexBox from "../UI/UiFlexBox/UiFlexBox";
import PencilIcon from "@/icons/PencilIcon";
import StatisticIcon from "@/icons/StatisticIcon";
import BookIcon from "@/icons/BookIcon";
import FavoritesIcon from "@/icons/FavoritesIcon";

import styles from "./LessonNavigation.module.css";
import IconBoxRound from "../UI/IconBoxRound/IconBoxRound";

const lessonNav = [
  {
    name: "Mistakes",
    icon: <PencilIcon />,
    color: "#FF7355",
    opacity: 1,
  },
  {
    name: "Statistics",
    icon: <StatisticIcon />,
    color: "#FF7355",
    opacity: 1,
  },
  {
    name: "Highway Code",
    icon: <BookIcon />,
    color: "#FF7355",
    opacity: 1,
  },
  {
    name: "Favorites",
    icon: <FavoritesIcon />,
    color: "#FF7355",
    opacity: 1,
  },
];

const LessonNavigation = () => {
  return (
    <UiFlexBox justify="space-between">
      {lessonNav.map((item) => (
        <UiFlexBox
          key={item.name}
          className={styles.item}
          col
          gap={8}
          align="center"
        >
          <IconBoxRound
            iconJSX={item.icon}
            backgroundColor={item.color}
            backgroundOpacity={item.opacity}
            width={58}
            style={{ flexShrink: 0 }}
          />
          <p className={styles.text}>{item.name}</p>
        </UiFlexBox>
      ))}
    </UiFlexBox>
  );
};

export default LessonNavigation;
