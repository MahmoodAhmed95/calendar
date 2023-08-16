import { useState } from "react";
export default function Calendar({ days, dates }) {
  const [selectedDay, setSelectedDay] = useState("");

  const handleButtonClick = (day) => {
    setSelectedDay(day);
  };

  return (
    <div className="calendarL">
      {dates.map((d, idx) => (
        <div key={idx}>
          <div
            className={`calendarCard ${
              selectedDay === days[idx % 7].name ? "selected" : ""
            }`}
          >
            <br />
            <div className="Day">{days[idx % 7].name}</div>
            <br />
            <div className="Date">{d}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
