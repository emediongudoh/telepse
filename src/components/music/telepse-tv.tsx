import Image from "next/image";

// Local imports
import { MusicBreak } from "./music-break";

export const TelepseTV = () => {
  return (
    <section className="section wrapper">
      <MusicBreak />

      <div className="flex items-center justify-center gap-8">
        <Image
          src="/client_logos/remax-seeklogo.png"
          alt="Telepse_digital_marketing_agency_lagos_nigeria_2ttee"
          width={500}
          height={500}
          className="size-52 object-contain"
        />

        <Image
          src="/client_logos/gmp-quality-seeklogo.png"
          alt="Telepse_digital_marketing_agency_lagos_nigeria_2ttee"
          width={500}
          height={500}
          className="size-52 object-contain"
        />
      </div>
    </section>
  );
};
