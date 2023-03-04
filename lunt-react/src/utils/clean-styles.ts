export const cleanStyles = (styles: React.CSSProperties) => {
  return Object.fromEntries(
    Object.entries(styles).filter(([_, value]) => value !== null)
  );
};
