import { useState, useEffect } from "react";

const useDate = () => {
  const [actualDate, setActualDate] = useState(new Date());
  useEffect(() => {
    const dateInterval = setInterval(() => {
      (setActualDate(new Date()));
    }, 1000);
    return () => {
      clearInterval(dateInterval)
    };
  },
  );
  return actualDate;
};
export default useDate;