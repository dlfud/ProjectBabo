import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TodoInput = () => {
  const [startDate, setStartDate] = useState(new Date());
  https: return (
    <div className="modal-box">
      <h3 className="font-bold text-lg">날짜 선택</h3>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
      <p className="py-4">할일 입력</p>
      <p className="py-4">메모</p>
      <div className="modal-action">
        <a href="#" className="btn">
          취소
        </a>
        <a href="#" className="btn">
          완료
        </a>
      </div>
    </div>
  );
};

export default TodoInput;
