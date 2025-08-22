import { SvgPattern } from "./svg-pattern";
import { Title } from "./title";

interface PageBannerProps {
  title: string;
}

export const PageBanner = ({ title }: PageBannerProps) => {
  return (
    <div
      style={{
        backgroundImage: `url(/Telepse_digital_marketing_agency_lagos_nigeria_home_bg.jpg)`,
      }}
      className="relative flex min-h-[40vh] flex-col items-center justify-center bg-cover bg-fixed bg-center bg-no-repeat bg-blend-multiply sm:min-h-[60vh]"
    >
      <Title
        size="lg"
        weight="bold"
      >
        {title}
      </Title>

      <div className="absolute bottom-0 w-full rotate-180">
        <SvgPattern fill="#FFF" />
      </div>
    </div>
  );
};
