import axios from "axios";
import React, { useState, useQuery } from "react";
import Calendar from "react-calendar";
import "./Calendar.css"; // css import
import moment from "moment/moment";

const Calender = ({ todos }) => {
  const [value, onChange] = useState(new Date());
  const [mark, setMark] = useState([]);


  return (
    <div className="my-4">
      {/* <div className="text-gray-500 mt-4">
        {moment(value).format("YYYY년 MM월 DD일")}
      </div> */}
      <Calendar onChange={onChange}
        formatDay={(locale, date) => moment(date).format("DD")} // 날'일' 제외하고 숫자만 보이도록 설정
        value={value} />
    </div>
  );
};

export default Calender;
