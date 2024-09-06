import { getTestsData } from "@/actions";
import { error } from "console";

export class TestDataService {
  static get() {
    getTestsData().then((data) => {
      if (data.error) {
        console.error("Произошла ошибка :", error);
        return;
      }
    });
  }
}
