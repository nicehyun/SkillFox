export const getPreviousMonth = (monthsAgo: number) => {
  const date = new Date();

  const newDate = new Date(date.getFullYear(), date.getMonth() - monthsAgo, 1);

  return newDate.toLocaleString("ko-KR", { month: "long" });
};
