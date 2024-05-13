import LogoDescription from "../atoms/LogoDescription";
import LogoImage from "../atoms/LogoImage";
import LogoText from "../atoms/LogoText";

const LogoImageWithText = () => {
  return (
    <h1 className="flex">
      <LogoImage />

      <div className="flex flex-col text-xs">
        <LogoText />
        <LogoDescription />
      </div>
    </h1>
  );
};

export default LogoImageWithText;
