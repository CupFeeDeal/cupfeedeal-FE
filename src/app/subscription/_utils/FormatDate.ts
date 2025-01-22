type Format = "dot" | "korean";

export const formatDate = (
  date: Date | string = new Date(),
  format: Format = "dot"
) => {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = d.getMonth() + 1;
  const day = d.getDate();

  switch (format) {
    case "dot":
      return `${year}. ${String(month).padStart(2, "0")}. ${String(
        day
      ).padStart(2, "0")}`;
    case "korean":
      return `${year}년 \n${month}월 ${day}일`;
  }
};
