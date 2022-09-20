import axios from "axios";
import React, { useState, useQuery } from "react";
import Calendar from "react-calendar";
import "./Calendar.css"; // css import
import moment from "moment/moment";

const Calender = ({ todos }) => {
  const [value, onChange] = useState(new Date());
  const mark = todos.map((x)=>{
    return x.createDate;
  })

  return (
    <div className="my-4">
      {/* <div className="text-gray-500 mt-4">
        {moment(value).format("YYYY년 MM월 DD일")}
      </div> */}
      <Calendar
        onChange={onChange}
        formatDay={(locale, date) => moment(date).format("DD")} // 날'일' 제외하고 숫자만 보이도록 설정
        value={value}
        className="mx-auto w-full text-sm border-b"
        navigationLabel={null}
        tileContent={({ date, view }) => {
          // 날짜 타일에 컨텐츠 추가하기 (html 태그)
          // 추가할 html 태그를 변수 초기화
          let html = [];
          // 현재 날짜가 post 작성한 날짜 배열(mark)에 있다면, dot div 추가
          if (mark.find((x) => x === moment(date).format("YYYY-MM-DD"))) {
            html.push(<div className="dot"><div className="content">{mark.content}</div></div>);
          }
          // 다른 조건을 주어서 html.push 에 추가적인 html 태그를 적용할 수 있음.
          return (
            <>
              <div className="flex absoluteDiv">
                {html}
              </div>
            </>
          );
        }}
      />
    </div>
  );
};

export default Calender;
