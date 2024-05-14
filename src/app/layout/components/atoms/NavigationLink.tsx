import Link from "next/link";

export interface INavigationLinkProps {
  children: string;
  href: string;
  isActive: boolean;
}

const NavigationLink = ({ children, href, isActive }: INavigationLinkProps) => {
  return (
    <Link
      className={`inline-block w-full p-2`}
      href={href}
      aria-current={isActive ? "page" : undefined}
    >
      {children}
    </Link>
  );
};

export default NavigationLink;
