import React from "react";

import styles from "./LessonAdviceNavigation.module.css";
import UiFlexBox from "../UI/UiFlexBox/UiFlexBox";
import UiSection from "../UI/UiSection/UiSection";
import LexamIcon from "@/icons/LexamIcon";
import RocketIcon from "@/icons/RocketIcon";
import TvPlayIcon from "@/icons/TvPlayIcon";
import RoundArrowRightIcon from "@/icons/RoundArrowRightIcon";
import GamepadIcon from "@/icons/GamepadIcon";
import IconBoxRound from "../UI/IconBoxRound/IconBoxRound";

const LessonAdviceNavigation = () => {
  return (
    <UiFlexBox className={styles.navWrapper} gap={8} wrap="wrap">
      {navItems.map((item) => (
        <UiSection key={item.name} className={styles.navItem} size="medium">
          <UiFlexBox align="center" gap={8}>
            <IconBoxRound
              iconJSX={item.icon}
              backgroundColor={item.color}
              backgroundOpacity={item.opacity}
              width={40}
              style={{ flexShrink: 0 }}
            />
            <p className={styles.text}>{item.name}</p>
          </UiFlexBox>
        </UiSection>
      ))}
    </UiFlexBox>
  );
};

const navItems = [
  {
    name: "DVSA Exam",
    icon: <LexamIcon />,
    color: "#FF2045",
    opacity: 0.1,
  },
  {
    name: "Express mode",
    icon: <RocketIcon />,
    color: "#6B2ABC",
    opacity: 0.1,
  },
  {
    name: "Hazard perception",
    icon: <TvPlayIcon />,
    color: "#6B2ABC",
    opacity: 0.1,
  },
  {
    name: "Road signs",
    icon: <RoundArrowRightIcon />,
    color: "#6B2ABC",
    opacity: 0.1,
  },
  {
    name: "Multiplayer Learning",
    icon: <GamepadIcon />,
    color: "#6B2ABC",
    opacity: 0.1,
  },
];

export default LessonAdviceNavigation;
