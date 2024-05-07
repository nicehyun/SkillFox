import Image from "next/image";

const PageLoading = () => {
  return (
    <section
      aria-busy="true"
      className="flexCenter absolute left-0 top-0 z-40 h-screen w-screen flex-col bg-white"
    >
      <span className="relative inline-block h-[140px] w-[140px]">
        <Image
          alt="로딩 중..."
          src="/images/loading.gif"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="absolute rounded-full"
        />
      </span>
      <h2 role="status" className="mt-4 font-bold">
        잠시만 기다려주세요 🦊
      </h2>
    </section>
  );
};

export default PageLoading;
