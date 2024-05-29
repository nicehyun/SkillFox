import Link from "next/link";

const Footer = () => {
  return (
    <footer className="h-[200px] w-full min-w-[320px] bg-secondary px-4 py-10 text-white">
      <p className="text-small">
        채용 공고 :{" "}
        <Link href="https://www.jumpit.co.kr/" target="_blank">
          https://www.jumpit.co.kr
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
