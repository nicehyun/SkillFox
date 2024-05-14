import NavigationLink from "../atoms/NavigationLink";

export interface INavigationItemProps {
  children: string;
  href: string;
  isActive: boolean;
}

const NavigationItem = ({ children, href, isActive }: INavigationItemProps) => {
  return (
    <li
      className={`${isActive ? "bg-orange/20 font-bold text-black1" : "transition duration-100 hover:bg-border hover:font-bold hover:text-black1"} list-none text-small text-black3`}
    >
      <NavigationLink href={href} isActive={isActive}>
        {children}
      </NavigationLink>
    </li>
  );
};

export default NavigationItem;
