import { Tests } from "@/types";
import { create } from "zustand";

interface TestsState {
  tests: Tests[];
  count: number;
  doneCount: number;
  // eslint-disable-next-line no-unused-vars
  setTests: (by: Tests[]) => void;
}

/**
 * @description Creating test states using the zustand library
 * @example  
 *  const { setTests, tests, count, doneCount } = useTestsStore();
    setTests([]);
    console.log(tests, count, doneCount) // [], 0, 0
 */

export const useTestsStore = create<TestsState>()((set) => ({
  tests: [],
  count: 0,
  doneCount: 0,
  setTests: (by) => set(() => ({ tests: by, count: by.length })),
}));
