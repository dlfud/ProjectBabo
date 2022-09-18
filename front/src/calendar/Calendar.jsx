import React, { useState } from "react";
import Calendar from "react-calendar";
import "./Calendar.css"; // css import
import moment from "moment/moment";

const Calender = ({ todos }) => {
  const { content } = todos;

  const [value, onChange] = useState(new Date());

  return (
    <div className="my-4">
      {/* <div className="text-gray-500 mt-4">
        {moment(value).format("YYYY년 MM월 DD일")}
      </div> */}
      <Calendar onChange={onChange} value={value} />
    </div>
  );
};

export default Calender;
