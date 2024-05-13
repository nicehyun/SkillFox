import Link from "next/link";
import LogoImageWithText from "./LogoImageWithText";

const LogoLink = () => {
  return (
    <Link href="/" aria-label="rotue to home">
      <LogoImageWithText />
    </Link>
  );
};

export default LogoLink;
