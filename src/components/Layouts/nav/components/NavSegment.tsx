export const NavSegment = ({
  children,
  classes,
}: {
  children: React.ReactNode;
  classes: string;
}) => {
  return <div className={`flex items-center ${classes}`}>{children}</div>;
};
