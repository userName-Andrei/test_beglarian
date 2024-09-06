"use client";

import { ReactNode } from "react";
import { useTestsStore } from "@/store";
import { TestDataService } from "@/services/TestsDataService";

interface AppInitializerProps {
  children: ReactNode;
}

export const AppInitializer = async ({ children }: AppInitializerProps) => {
  const newTests = await TestDataService.get();

  const { setTests } = useTestsStore();

  setTests(newTests);

  return <>{children}</>;
};
