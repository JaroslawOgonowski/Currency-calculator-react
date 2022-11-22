import useDate from "./useDate";
import "./style.css"
const Clock = () => {
  const actualDate = useDate();

  return (
    <div className="clock__container">
      <div className="clock">
        Aktualny czas: {actualDate.toLocaleString("pl-PL", {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit"
        })}
      </div>
    </div>
  )
};

export default Clock;