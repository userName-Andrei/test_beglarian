import { Tests } from "@/types";
import test from "node:test";
import { create } from "zustand";

interface TestsState {
  tests: Tests[];
  count: number;
  doneCount: number;
  // eslint-disable-next-line no-unused-vars
  setTests: (by: Tests[]) => void;
  // eslint-disable-next-line no-unused-vars
  changeItemStatusById: (id: string) => void;
}

/**
 * @description The function filters the array and leaves
 * only the completed tests in it, after which it returns their number
 * @param {Tests[]} tests
 * @returns {number} Number of completed tests
 */

function getDoneCount(tests: Tests[]): number {
  return tests.filter((el) => el.done).length;
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
  /**
   * @description A method for changing the state of tests
   * @param {Tests[]} by
   * @returns {void}
   */
  setTests: (by: Tests[]): void =>
    set(() => ({
      tests: by,
      count: by.length,
      doneCount: getDoneCount(by),
    })),
  /**
   *@description A method for changing the status of a specific test item
   * @param {string} id
   * @returns {void}
   */
  changeItemStatusById: (id: string): void =>
    set((state) => {
      /**
       * Creating a new test object with the changed
       * execution status of the element with the specified identifier
       */
      const newTests = state.tests.map((el) => {
        if (el.id === id) {
          return {
            ...el,
            done: !el.done,
          };
        }
        return el;
      });

      return {
        ...state,
        tests: newTests,
        count: newTests.length,
        doneCount: getDoneCount(newTests),
      };
    }),
}));
