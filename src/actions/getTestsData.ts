export async function getTestsData() {
  return fetch("mock.json").then((res) => res.json());
}
