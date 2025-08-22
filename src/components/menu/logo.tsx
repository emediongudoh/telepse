import Link from "next/link";
import Image from "next/image";

export const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/Telepse_digital_marketing_agency_lagos_nigeria_logo.png"
        alt="Telepse_digital_marketing_agency_lagos_nigeria_logo"
        width={100}
        height={100}
        className="h-10 w-14 object-cover"
      />
    </Link>
  );
};
