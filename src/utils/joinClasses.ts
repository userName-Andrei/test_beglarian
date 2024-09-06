/**
 *
 * @param {[string| undefined]} className an array of strings that need to be combined
 * @returns {string} A string with class names
 * @description This function is used to combine several classes into 1 line with separation to pass them to className
 * @example 
 * const Components: FC<ComponentsProps> = ({ children }) => {
  return (
    <div
      className={joinClasses(class1, class2, class3)}
    >
      {children}
    </div>
  );
};
 */

export function joinClasses(...className: Array<string | undefined>): string {
  return className.filter((name) => !!name).join(" ");
}
