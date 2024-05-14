export interface ILogoTextProps {
  children: string;
}

const LogoText = ({ children }: ILogoTextProps) => {
  return <span className="font-bold">{children}</span>;
};

export default LogoText;
