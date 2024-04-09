import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="h-[200px] min-w-[320px] bg-orange px-4 py-10 text-white sm:px-2 md:px-4">
        Powered by{" "}
        <Link
          href="http://www.saramin.co.kr"
          target="_blank"
          className="text-info"
        >
          취업 사람인
        </Link>
      </footer>
    </>
  );
};

export default Footer;
