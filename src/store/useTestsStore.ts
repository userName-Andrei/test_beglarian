import { Tests } from "@/types";
import { create } from "zustand";

interface TestsState {
  tests: Tests[];
  count: number;
  doneCount: number;
  // eslint-disable-next-line no-unused-vars
  setTests: (by: Tests[]) => void;
}

export const useTestsStore = create<TestsState>()((set) => ({
  tests: [],
  count: 0,
  doneCount: 0,
  setTests: (by) => set(() => ({ tests: by, count: by.length })),
}));
