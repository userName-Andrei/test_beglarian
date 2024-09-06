/**
 * @description Function for getting data from a json file
 * @returns {Promise<any>} Returns a promise of type any
 * @example
 * getTestsData().then(data => console.log(data))
 */
export async function getTestsData(): Promise<any> {
  return fetch("mock.json").then((res) => res.json());
}
