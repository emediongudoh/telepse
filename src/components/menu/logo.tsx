import Link from "next/link";
import Image from "next/image";

export const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/logo.png"
        alt="Telepse logo"
        width={120}
        height={120}
        className="h-10 w-14 object-cover"
      />
    </Link>
  );
};
