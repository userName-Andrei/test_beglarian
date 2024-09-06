import styles from "./page.module.css";
import CrownIcon from "@/icons/CrownIcon";
import FireIcon from "@/icons/FireIcon";
import UiFlexBox from "@/components/UI/UiFlexBox/UiFlexBox";
import HeaderIconBox from "@/components/HeaderIconBox/HeaderIconBox";
import LessonBlock from "@/components/LessonBlock/LessonBlock";
import LessonAdviceNavigation from "@/components/LessonAdviceNavigation/LessonAdviceNavigation";
import LessonNavigation from "@/components/LessonNavigation/LessonNavigation";
import Header from "@/components/Header/Header";

export default function Home() {
  return (
    <main className={styles.content}>
      <Header className={styles.header}>
        <UiFlexBox
          className={styles.header__body}
          justify="space-between"
          align="center"
        >
          <p className={styles.text}>Ray Driving Theory</p>
          <UiFlexBox gap={8}>
            <HeaderIconBox iconJSX={<CrownIcon />} />
            <HeaderIconBox iconJSX={<FireIcon />} text={13} />
          </UiFlexBox>
        </UiFlexBox>
      </Header>

      <LessonBlock name="Learning" category="Category В" />

      <LessonAdviceNavigation />

      <LessonNavigation />
    </main>
  );
}
