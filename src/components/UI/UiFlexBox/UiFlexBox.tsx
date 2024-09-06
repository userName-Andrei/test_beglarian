import React, { FC } from "react";

interface UiFlexBoxProps extends React.HTMLProps<HTMLDivElement> {
  justify?: React.CSSProperties["justifyContent"];
  align?: React.CSSProperties["alignItems"];
  col?: boolean;
  grow?: boolean;
  shrink?: boolean;
  wrap?: React.CSSProperties["flexWrap"];
  basis?: React.CSSProperties["flexBasis"];
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
  grow,
  shrink,
  basis,
  wrap,
  ...props
}) => {
  const flexStyles: React.CSSProperties = {
    display: "flex",
    justifyContent: justify,
    alignItems: align,
    flexDirection: col ? "column" : "row",
    gap: gap,
    ...(grow && { flexGrow: grow ? 1 : 0 }),
    ...(shrink && { flexShrink: shrink ? 0 : 1 }),
    flexBasis: basis,
    flexWrap: wrap,
    ...style,
  };

  return (
    <div style={flexStyles} {...props}>
      {children}
    </div>
  );
};

export default UiFlexBox;
