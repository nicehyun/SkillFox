import Link from "next/link";
import Icon from "../../common/components/atoms/Icon";
import { IoBarChart } from "react-icons/io5";

// aria-label 수정, RouteNavigation명 수정 (용도에 맞게 수정하기)
const RouteNavigation = () => {
  const links = [{ href: "/", icon: <IoBarChart /> }];
  return (
    <nav
      aria-label="직무 선택"
      className="border-border fixed top-[80px] z-20 h-screen border-r-[1px] py-2"
    >
      <ul>
        {links.map((link) => (
          <li
            key={``}
            className="flexCenter hover:bg-border mx-2 h-[32px] w-[32px] rounded-[5px] transition duration-100"
          >
            {/* // TODO : aria-current 추가하기 */}
            <Link href={link.href} className="flex">
              <Icon icon={link.icon} size="large" />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default RouteNavigation;
