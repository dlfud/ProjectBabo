import axios from "axios";
import React, { useState } from "react";

const TodoInput = ({ todos, setTodos, nextId, active, setActive }) => {
    const [content, setContent] = useState("");
    const onSubmit = async (e) => {
        e.preventDefault();
        const data = await axios({
            url: "http://localhost:8085/todo/create",
            method: "POST",
            data: { content },
        });
        setTodos(data.data);
        nextId.current++;
        setContent("");
    }

    return (
        <div>
            <div>달력, 할일, 메모</div>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="할일을 추가해주세요"
                    className="input input-bordered w-full max-w-xl"
                    value={content}
                    onChange={(e) => {
                        setContent(e.target.value);
                    }}
                />
                <div className="modal-action">
                    <button type="submit" htmlFor="my-modal-5" className="btn" onClick={ setActive(false) }>완료</button>
                </div>
            </form>
        </div>
    )
}

export default TodoInput;