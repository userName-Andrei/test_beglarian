import Header from "@/components/Header/Header";
import React from "react";

import styles from "./page.module.css";
import NavLink from "@/components/UI/NavLink/NavLink";
import UiFlexBox from "@/components/UI/UiFlexBox/UiFlexBox";
import LearningList from "@/components/LearningList/LearningList";

const Tests = () => {
  return (
    <main>
      <Header backBtn>
        <p className={styles.text}>Learning</p>
      </Header>

      <UiFlexBox className={styles.rowNavLink} align="center" justify="center">
        <NavLink
          href="/tests"
          className={styles.navLink}
          activeClass={styles.navLink__active}
        >
          <p className={styles.navLink__text}>Tests</p>
        </NavLink>
      </UiFlexBox>

      <LearningList />
    </main>
  );
};

export default Tests;
