import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

function Datepickers() {
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <div>
      <label className="lead">Date :</label>
      <DatePicker
        isClearable
        dateFormat="MMM dd yyyy"
        id="datePick"
        minDate={new Date()}
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
      />
    </div>
  );
}
export default Datepickers;
