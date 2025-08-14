interface SmallTitleProps {
  title?: string;
  className?: string;
  isCentered?: boolean;
  isBold?: boolean;
}

export const SmallTitle = ({
  title,
  className,
  isCentered = true,
  isBold = true,
}: SmallTitleProps) => {
  return (
    <h2
      className={`${className} ${isCentered ? "text-center" : ""} text-3xl ${isBold ? "font-semibold" : "font-medium"}`}
    >
      {title}
    </h2>
  );
};
