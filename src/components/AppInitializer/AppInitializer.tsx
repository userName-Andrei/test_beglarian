"use client";

import { ReactNode, useEffect } from "react";
import { useTestsStore } from "@/store";
import { TestDataService } from "@/services";

/**
 * @description Client component for initializing the zustand state
 *
 */
interface AppInitializerProps {
  children: ReactNode;
}

/**
 *
 * @param {AppInitializerProps}
 * @returns {JSX.Element}
 */
export const AppInitializer = ({
  children,
}: AppInitializerProps): JSX.Element => {
  const { setTests } = useTestsStore();
  async function getTests() {
    const tests = await TestDataService.get();
    setTests(tests);
  }
  useEffect(() => {
    getTests();
  }, []);

  return <>{children}</>;
};
