import Link from "next/link";
import { TbBrandReactNative } from "react-icons/tb";
import Icon from "../common/components/atoms/Icon";
import { SiApache, SiTensorflow } from "react-icons/si";
import { LuServer } from "react-icons/lu";
import { IoStatsChartOutline } from "react-icons/io5";
import { convertJobCodeToDescription } from "../common/utils/classification";
import { Job } from "../common/types";

type HomeLinks = {
  id: Job;
  icon: JSX.Element;
}[];

export default function Home() {
  const links: HomeLinks = [
    {
      id: "FE",
      icon: <TbBrandReactNative />,
    },
    {
      id: "BE",
      icon: <LuServer />,
    },
    {
      id: "DE",
      icon: <SiApache />,
    },
    {
      id: "DA",
      icon: <IoStatsChartOutline />,
    },
    {
      id: "ML",
      icon: <SiTensorflow />,
    },
  ];
  return (
    <section>
      <h1 className="flexCenter mb-10 font-bold">
        🚀 기술 분석을 원하는 직무를 선택해주세요.
      </h1>

      <div className="grid grid-cols-2 gap-[20px] sm:grid-cols-1 md:grid-cols-1">
        {links.map((link) => (
          <Link
            key={`link-${link.id}`}
            className={`flexCenter w-full rounded-[5px] border-[2px] border-orange py-4 text-small font-bold shadow`}
            href={`/${link.id}/skillFrequency`}
          >
            <Icon icon={link.icon} className="mr-2" size="normal" />{" "}
            {convertJobCodeToDescription(link.id)}
          </Link>
        ))}
      </div>
    </section>
  );
}
