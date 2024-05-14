import { usePathname } from "next/navigation";

export const useGetClassification = () => {
  const pathname = usePathname();
  const [, classification] = pathname ? pathname.split("/") : [];
  return { classification };
};
