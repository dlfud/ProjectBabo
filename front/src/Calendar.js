import React, { useState } from "react";
import "./Calendar.css";

const Calendar = () => {
  const [days, setDays] = useState(["일", "월", "화", "수", "목", "금", "토"]);

  return (
    <div>
      <div className="row">
        month
        <div className="col">{days}</div>
        day
      </div>
    </div>
  );
};

export default Calendar;
