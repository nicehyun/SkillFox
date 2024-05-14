import Link from "next/link";
import LogoImageWithText from "./LogoImageWithText";

const LogoLink = () => {
  return (
    <Link href="/" aria-label="rotue to home">
      <LogoImageWithText
        logoDescription="채용 공고 기술 분석"
        logoText="Skill Analysis"
      />
    </Link>
  );
};

export default LogoLink;
