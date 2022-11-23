import useCurrentDate from "./useDate";
import "./style.css"
const Clock = () => {
  const actualDate = useCurrentDate();

  const displayDate = (date) => (
    date.toLocaleString("pl-PL", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    })
  );

  return (
    <div className="clock">
      Aktualny czas: {displayDate(actualDate)}
    </div>
  )
};

export default Clock;