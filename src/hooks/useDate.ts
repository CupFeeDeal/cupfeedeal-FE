import { useMemo } from "react";

const useDate = () => {
  const formattedDate = useMemo(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const date = String(today.getDate()).padStart(2, "0");

    return `${year}. ${month}. ${date}`;
  }, []);

  return formattedDate;
};

export default useDate;
