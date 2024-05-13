import NavigationItem from "./NavigationItem";

type Links = { href: string; content: string }[];

interface INavigationMenuProps {
  links: Links;
  classification: string;
  currentPath: string;
}

const NavigationMenu = ({
  links,
  classification,
  currentPath,
}: INavigationMenuProps) => {
  return (
    <ul>
      {links.map((link, index) => (
        <NavigationItem
          key={`link-analysis-${index}`}
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/${classification}/${link.href}`}
          isActive={currentPath === `/${classification}${link.href}`}
        >
          {link.content}
        </NavigationItem>
      ))}
    </ul>
  );
};

export default NavigationMenu;
