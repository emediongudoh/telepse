interface ServiceBannerProps {
  image: string;
  title: string;
}

export const ServiceBanner = ({ image, title }: ServiceBannerProps) => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`,
      }}
      className="flex min-h-[50vh] items-center justify-center bg-cover bg-center bg-no-repeat text-white bg-blend-multiply"
    >
      <h1 className="text-3xl font-semibold sm:text-6xl">{title}</h1>
    </div>
  );
};
