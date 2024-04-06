import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <h1>
      <Link href="/" className="relative inline-block h-[30px] w-[30px]">
        <Image
          alt="skillfox-logo"
          src="/images/logo.webp"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="absolute"
        />
      </Link>
    </h1>
  );
};

export default Logo;
