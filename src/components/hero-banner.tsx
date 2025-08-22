import { Title } from "./title";

interface HeroBannerProps {
  image: string;
  title: string;
}

export const HeroBanner = ({ image, title }: HeroBannerProps) => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(135deg, #FEE600, rgba(0, 0, 0, 0.5)), url(${image})`,
      }}
      className="flex min-h-[60vh] flex-col items-center justify-center bg-cover bg-center bg-no-repeat bg-blend-multiply"
    >
      <Title
        align="center"
        size="lg"
        weight="bold"
        color="white"
      >
        {title}
      </Title>
    </div>
  );
};
