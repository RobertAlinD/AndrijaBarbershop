import React, { useState, useEffect } from "react";
import "./Calendar.css";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    setReservations([
      { date: "2024-01-01", time: "11:30" },
      { date: "2024-01-02", time: "13:00" },
      { date: "2024-01-03", time: "14:30" },
      { date: "2024-01-04", time: "15:00" },
      { date: "2024-01-06", time: "11:00" },
      { date: "2024-01-09", time: "12:30" },
      { date: "2024-01-12", time: "11:45" },
      { date: "2024-01-17", time: "12:30" },
      { date: "2024-01-21", time: "09:15" },
      { date: "2024-01-25", time: "13:00" },
      { date: "2024-01-30", time: "17:00" },
    ]);
  }, []);

  const handleCellClick = (date, time) => {
    setSelectedDate(date);
    setSelectedTime(time);
    console.log(`Ai selectat data ${date} și ora ${time}`);
  };

  const isReserved = (date, time) => {
    return reservations.some(
      (reservation) => reservation.date === date && reservation.time === time
    );
  };

  const generateCalendar = () => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const startingDay = (firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1) % 7;

    let date = 1 - startingDay;

    const rows = [];
    for (let i = 0; i < 5; i++) {
      const cells = [];
      for (let j = 0; j < 7; j++) {
        const isDisabled = date <= 0 || date > daysInMonth;
        const formattedDate = isDisabled
          ? ""
          : new Date(currentYear, currentMonth, date)
              .toISOString()
              .split("T")[0];

        cells.push(
          <td
            key={`${i}-${j}`}
            onClick={() =>
              !isDisabled && handleCellClick(formattedDate, selectedTime)
            }
            className={`${selectedDate === formattedDate ? "selected" : ""} ${
              isReserved(formattedDate, selectedTime) ? "reserved" : ""
            } ${isDisabled ? "disabled" : ""}`}
          >
            {date > 0 && date <= daysInMonth ? (
              <>
                {date}
                {isReserved(formattedDate, selectedTime) && (
                  <div className="occupied-message">Ocupat</div>
                )}
              </>
            ) : (
              ""
            )}
          </td>
        );

        date++;
      }

      rows.push(<tr key={i}>{cells}</tr>);
    }

    return rows;
  };

  const generateTimeSlots = () => {
    const timeSlots = [];
    const startHour = 9;
    const endHour = 18;

    for (let hour = startHour; hour <= endHour; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const formattedHour = hour.toString().padStart(2, "0");
        const formattedMinute = minute.toString().padStart(2, "0");
        const time = `${formattedHour}:${formattedMinute}`;

        timeSlots.push(
          <div
            key={time}
            onClick={() => handleCellClick(selectedDate, time)}
            className={`time-slot ${
              isReserved(selectedDate, time) ? "reserved" : ""
            }`}
          >
            {time}
            {isReserved(selectedDate, time) && (
              <div className="occupied-message">Ocupat</div>
            )}
          </div>
        );
      }
    }

    return timeSlots;
  };

  return (
    <div className="titlerezervation">
      <h4>PROGRAMARE ONLINE</h4>
      <h4>
        Ne incadram in ora programata de tine si respectam programul de tuns
      </h4>
      <div className="calendar">
        <table>
          <thead>
            <tr>
              <th>L</th>
              <th>M</th>
              <th>M</th>
              <th>J</th>
              <th>V</th>
              <th>S</th>
              <th>D</th>
            </tr>
          </thead>
          <tbody>{generateCalendar()}</tbody>
        </table>

        <div className="time-slots">
          <h3>Selecteaza ora :</h3>
          {generateTimeSlots()}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
