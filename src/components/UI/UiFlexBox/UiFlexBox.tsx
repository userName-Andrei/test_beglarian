import React, { FC } from "react";

interface UiFlexBoxProps extends React.HTMLProps<HTMLDivElement> {
  justify?: React.CSSProperties["justifyContent"];
  align?: React.CSSProperties["alignItems"];
  col?: boolean;
  gap?: number;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

const UiFlexBox: FC<UiFlexBoxProps> = ({
  justify,
  align,
  gap,
  style,
  children,
  col,
  ...props
}) => {
  const flexStyles: React.CSSProperties = {
    display: "flex",
    justifyContent: justify,
    alignItems: align,
    flexDirection: col ? "column" : "row",
    gap: gap,
    ...style,
  };

  return (
    <div style={flexStyles} {...props}>
      {children}
    </div>
  );
};

export default UiFlexBox;
