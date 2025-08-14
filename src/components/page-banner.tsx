import { BigTitle } from "./big-title";

interface PageBannerProps {
  title: string;
}

export const PageBanner = ({ title }: PageBannerProps) => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(135deg, #FEE600, rgba(0, 0, 0, 0.5)), url(/products-banner.jpg)`,
      }}
      className="flex min-h-[50vh] flex-col items-center justify-center bg-cover bg-center bg-no-repeat text-white bg-blend-multiply"
    >
      <BigTitle title={title} />
    </div>
  );
};
