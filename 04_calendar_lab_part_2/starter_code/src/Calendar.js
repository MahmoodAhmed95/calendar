import React from "react";
import "./Calendar.css"; // Create this CSS file to style the calendar

function Calendar({ days, dates }) {
  return (
    <div className="Calendar">
      <h1>React Calendar</h1>
      <div className="CalendarGrid">
        {dates.map((date, i) => (
          <div key={i} className="CalendarCell">
            <div className="DayName">{days[i % days.length].name}</div>
            <div className="DateNumber">{date}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calendar;
