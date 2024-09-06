"use client";

import React, { FC } from "react";
import UiFlexBox from "../UI/UiFlexBox/UiFlexBox";
import BackArrowIcon from "@/icons/BackArrowIcon";
import { useRouter } from "next/navigation";
import styles from "./Header.module.css";
import { joinClasses } from "@/utils/joinClasses";

interface HeaderProps {
  backBtn?: boolean;
  children: React.ReactNode;
  className?: string;
}

const Header: FC<HeaderProps> = ({ backBtn, className, children }) => {
  const router = useRouter();
  const classNames = joinClasses(styles.wrapper, className);

  const handleGoBack = () => {
    router.back();
  };

  return (
    <UiFlexBox className={classNames} align="center" gap={16}>
      {backBtn && (
        <div className={styles.icon} onClick={handleGoBack}>
          <BackArrowIcon />
        </div>
      )}
      {children}
    </UiFlexBox>
  );
};

export default Header;
