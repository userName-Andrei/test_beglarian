"use client";

import React from "react";
import styles from "./Navigation.module.css";
import UiFlexBox from "../UI/UiFlexBox/UiFlexBox";
import HomeIcon from "@/icons/HomeIcon";
import PlanIcon from "@/icons/PlanIcon";
import NavLink from "../UI/NavLink/NavLink";
import LeaderboardIcon from "@/icons/LeaderboardIcon";
import UserIcon from "@/icons/UserIcon";

const Navigation = () => {
  return (
    <div className={styles.wrapper}>
      <UiFlexBox className={styles.row}>
        {navItems.map((item) => (
          <NavLink
            key={item.url}
            href={item.url}
            className={styles.navlink}
            activeClass={styles.active}
            exact
          >
            <UiFlexBox col align="center" gap={4}>
              <div className={styles.icon}>
                <div className={styles.icon__bg}></div>
                <div className={styles.icon__body}>{item.icon}</div>
              </div>
              <p className={styles.text}>{item.name}</p>
            </UiFlexBox>
          </NavLink>
        ))}
      </UiFlexBox>
    </div>
  );
};

const navItems = [
  {
    name: "Home",
    icon: <HomeIcon />,
    url: "/",
  },
  {
    name: "Your plan",
    icon: <PlanIcon />,
    url: "/my-plan",
  },
  {
    name: "Leaderboard ",
    icon: <LeaderboardIcon />,
    url: "/leaderboard ",
  },
  {
    name: "Profile",
    icon: <UserIcon />,
    url: "/profile",
  },
];

export default Navigation;
