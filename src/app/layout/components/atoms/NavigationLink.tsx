import Link from "next/link";

interface INavigationItemProps {
  children: string;
  href: string;
  isActive: boolean;
}

const NavigationLink = ({ children, href, isActive }: INavigationItemProps) => {
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
