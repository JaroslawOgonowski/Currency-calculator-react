import useCurrentDate from "./useCurrentDate";
import { StyledClock } from "./styled";

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
    <StyledClock>
      Aktualny czas: { displayDate(actualDate) }
    </StyledClock>
  );
};

export default Clock;