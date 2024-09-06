"use client";

import React, { FC } from "react";
import UiFlexBox from "../UI/UiFlexBox/UiFlexBox";
import BackArrowIcon from "@/icons/BackArrowIcon";
import { useRouter } from "next/navigation";
import styles from "./Header.module.css";

interface HeaderProps {
  backBtn?: boolean;
  children: React.ReactNode;
}

const Header: FC<HeaderProps> = ({ backBtn, children }) => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <UiFlexBox align="center" gap={16}>
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
