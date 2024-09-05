export function joinClasses(...classname: Array<string | undefined>): string {
  return classname.filter((name) => !!name).join(" ");
}
