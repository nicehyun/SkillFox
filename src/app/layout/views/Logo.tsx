import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <h1 className="flex">
        <span className="mr-2 inline-block rounded-[5px] border-[1px] border-gray1 p-[2px]">
          <span className="flexCenter relative h-[26px] w-[26px]">
            <Image
              alt="skillfox-logo"
              src="/images/logo.webp"
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="absolute"
            />
          </span>
        </span>

        <div className="flex flex-col text-xs">
          <span className="font-bold">SKILL FOX</span>
          <span className="text-gray1">채용 공고 기술 분석</span>
        </div>
      </h1>
    </Link>
  );
};

export default Logo;
