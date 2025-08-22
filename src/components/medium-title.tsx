interface MediumTitleProps {
  title: string;
  isCentered?: boolean;
  isBold?: boolean;
}

export const MediumTitle = ({
  title,
  isCentered = true,
  isBold = true,
}: MediumTitleProps) => {
  return (
    <h2
      className={`${isCentered ? "text-center" : ""} ${isBold ? "font-semibold" : "font-medium"} text-3xl sm:text-4xl`}
    >
      {title}
    </h2>
  );
};
