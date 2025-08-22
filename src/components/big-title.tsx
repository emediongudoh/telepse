interface BigTitleProps {
  title: string;
  isCentered?: boolean;
  isBold?: boolean;
}

export const BigTitle = ({
  title,
  isCentered = true,
  isBold = true,
}: BigTitleProps) => {
  return (
    <h2
      className={`${isCentered ? "text-center" : ""} ${isBold ? "font-semibold" : "font-medium"} text-3xl sm:text-5xl`}
    >
      {title}
    </h2>
  );
};
