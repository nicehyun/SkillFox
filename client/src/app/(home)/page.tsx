import Link from "next/link";
import { TbBrandReactNative } from "react-icons/tb";
import Icon from "../features/common/components/atoms/Icon";
import { SiApache, SiTensorflow } from "react-icons/si";
import { LuServer } from "react-icons/lu";
import { IoStatsChartOutline } from "react-icons/io5";

export default function Home() {
  const links = [
    {
      id: "FE",
      content: "프론트엔드",
      icon: <TbBrandReactNative />,
    },
    {
      id: "BE",
      content: "백엔드・서버",
      icon: <LuServer />,
    },
    {
      id: "DE",
      content: "데이터 엔지니어",
      icon: <SiApache />,
    },
    {
      id: "DA",
      content: "데이터 분석가",
      icon: <IoStatsChartOutline />,
    },
    {
      id: "ML",
      content: "머신러닝 엔지니어",
      icon: <SiTensorflow />,
    },
  ];
  return (
    <section className="">
      <h1 className="flexCenter mb-10 font-bold">
        🚀 기술 분석을 원하는 직무를 선택해주세요.
      </h1>

      <div className="grid grid-cols-2 gap-[20px] sm:grid-cols-1 md:grid-cols-1">
        {links.map((link) => (
          <Link
            key={`link-${link.id}`}
            className={` flexCenter w-full rounded-[5px] border-[2px] border-orange py-4 text-small font-bold shadow`}
            href={`/${link.id}/skillFrequency`}
          >
            <Icon icon={link.icon} className="mr-2" size="normal" />{" "}
            {link.content}
          </Link>
        ))}
      </div>
    </section>
  );
}
