import styles from "./page.module.css";
import CrownIcon from "@/icons/CrownIcon";
import FireIcon from "@/icons/FireIcon";
import UiFlexBox from "@/components/UI/UiFlexBox/UiFlexBox";
import HeaderIconBox from "@/components/HeaderIconBox/HeaderIconBox";
import LessonBlock from "@/components/LessonBlock/LessonBlock";
import LessonAdviceNavigation from "@/components/LessonAdviceNavigation/LessonAdviceNavigation";
import LessonNavigation from "@/components/LessonNavigation/LessonNavigation";
import Navigation from "@/components/Navigation/Navigation";

export default function Home() {
  return (
    <main className={styles.content}>
      <UiFlexBox
        className={styles.header}
        justify="space-between"
        align="center"
      >
        <p className={styles.text}>Ray Driving Theory</p>
        <UiFlexBox gap={8}>
          <HeaderIconBox iconJSX={<CrownIcon />} />
          <HeaderIconBox iconJSX={<FireIcon />} text={13} />
        </UiFlexBox>
      </UiFlexBox>

      <LessonBlock name="Learning" category="Category В" />

      <LessonAdviceNavigation />

      <LessonNavigation />

      <Navigation />
    </main>
  );
}
