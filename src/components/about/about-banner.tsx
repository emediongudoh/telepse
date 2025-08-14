import { BigTitle } from "../big-title";
import { SvgPattern } from "../svg-pattern";

export const AboutBanner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(/home-bg.jpg)`,
      }}
      className="relative flex min-h-[50vh] flex-col items-center justify-center bg-cover bg-fixed bg-center bg-no-repeat bg-blend-multiply"
    >
      <BigTitle title="About us" />
      <div className="absolute bottom-0 w-full rotate-180">
        <SvgPattern fill="#FFF" />
      </div>
    </div>
  );
};
