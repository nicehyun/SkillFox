export interface ILogoDescriptionProps {
  children: string;
}

const LogoDescription = ({ children }: ILogoDescriptionProps) => {
  return <span className="text-black3">{children}</span>;
};

export default LogoDescription;
