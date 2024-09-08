"use client";

import { ReactNode, useEffect } from "react";
import { useTestsStore } from "@/store";
import { TestDataService } from "@/services";
import test from "node:test";

interface AppInitializerProps {
  children: ReactNode;
}

async function getTests() {
  const tests = await TestDataService.get();

  return tests;
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
