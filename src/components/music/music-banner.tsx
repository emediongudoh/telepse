import { SvgPattern } from "../svg-pattern";
import { Title } from "../title";

export const MusicBanner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(/Telepse_digital_marketing_agency_lagos_nigeria_home_bg.jpg)`,
      }}
      className="relative flex min-h-[50vh] flex-col items-center justify-center gap-4 bg-cover bg-fixed bg-center bg-no-repeat bg-blend-multiply"
    >
      <Title
        align="center"
        size="lg"
        weight="bold"
      >
        Telepse Music
      </Title>

      <Title
        align="center"
        weight="normal"
      >
        Connecting independent talents with global opportunities
      </Title>
      <div className="absolute bottom-0 w-full rotate-180">
        <SvgPattern fill="#FFF" />
      </div>
    </div>
  );
};
