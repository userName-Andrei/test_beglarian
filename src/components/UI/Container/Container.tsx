import React, { FC } from "react";
import styles from "./Container.module.css";
import { joinClasses } from "@/utils/joinClasses";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  withNavigation?: boolean;
}

const Container: FC<ContainerProps> = ({
  children,
  className,
  withNavigation = false,
  ...props
}) => {
  const classNames = joinClasses(
    styles.container,
    withNavigation ? styles.withNavigation : undefined,
    className
  );
  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  );
};

export default Container;
