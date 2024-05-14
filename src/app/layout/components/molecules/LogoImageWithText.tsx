import LogoDescription from "../atoms/LogoDescription";
import LogoImage from "../atoms/LogoImage";
import LogoText from "../atoms/LogoText";

export interface ILogoImageWithTextProps {
  logoText: string;
  logoDescription: string;
}

const LogoImageWithText = ({
  logoDescription,
  logoText,
}: ILogoImageWithTextProps) => {
  return (
    <h1 className="flex">
      <LogoImage />

      <div className="flex flex-col text-xs">
        <LogoText>{logoText}</LogoText>
        <LogoDescription>{logoDescription}</LogoDescription>
      </div>
    </h1>
  );
};

export default LogoImageWithText;
