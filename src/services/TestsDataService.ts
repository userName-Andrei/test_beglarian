import { getTestsData } from "@/actions";
import { Tests } from "@/types";

/**
 * @description service for working with test requests
 */

export class TestDataService {
  /**
   * @description a method for obtaining and converting a service object,
   * returns an empty array in case of an error and outputs an error to the console
   * @returns {Promise<Tests[]>}
   * @example
   * const newTests = await TestDataService.get();
   * console.log(newTests)
   * // [{id:'1', name: '1', done: false}, ...] || []
   */
  static async get(): Promise<Tests[]> {
    return getTestsData()
      .then((data) => {
        if (data.error) {
          console.error("Произошла ошибка :", data.error);
          return [];
        }

        if (data.data) {
          const array = data.data;
          if (array[1].id && array[1].name) {
            return data.data as Tests[];
          }

          return [];
        }

        return [];
      })
      .catch((error) => {
        console.error("Произошла ошибка :", error);
        return [];
      });
  }
}
