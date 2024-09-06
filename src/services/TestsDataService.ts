import { getTestsData } from "@/actions";
import { Tests } from "@/types";
import { error } from "console";

export class TestDataService {
  static async get(): Promise<Tests[]> {
    return getTestsData().then((data) => {
      if (data.error) {
        console.error("Произошла ошибка :", error);
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
    });
  }
}
