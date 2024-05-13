import Image from "next/image";

const LogoImage = () => {
  return (
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
  );
};

export default LogoImage;
