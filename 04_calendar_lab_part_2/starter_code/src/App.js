import Buttons from "./Buttons";
import Calendar from "./Calendar";
import setSelectedDay from "./Calendar";
import "bootstrap/dist/css/bootstrap.min.css";
export default function App() {
  const days = [
    {
      name: "Sunday",
    },
    {
      name: "Monday",
    },
    {
      name: "Tuesday",
    },
    {
      name: "Wednesday",
    },
    {
      name: "Thursday",
    },
    {
      name: "Friday",
    },
    {
      name: "Saturday",
    },
  ];

  // The following creates an array of numbers from [1..28]
  const dates = Array.from({ length: 28 }, (x, i) => i + 1);
  const handleButtonClick = (day) => {
    setSelectedDay(day);
  };
  return (
    <div className="App">
      <Buttons handleButtonClick={handleButtonClick} />
      <Calendar days={days} dates={dates} />
    </div>
  );
}
