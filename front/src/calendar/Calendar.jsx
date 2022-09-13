import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // css import

const Calender = ({ todos }) => {
  const { content } = todos;

  const [value, onChange] = useState(new Date());

  return (
    <div className="mt-20">
      <Calendar onChange={onChange} value={value} />
    </div>
  );
};

export default Calender;
