import React from "react";
import { Link } from "react-router-dom";
import { BsPlusLg } from "react-icons/bs";
import { MdCalendarToday } from "react-icons/md";
import TodoInput from "../todolist/TodoInput";

const Header = () => {
  return (
    <header>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <div>
                  <Link to="/todo">Todolist</Link>
                </div>
              </li>
              <li>
                <div>
                  <Link to="/">Homepage</Link>
                </div>
              </li>
              <li>
                <div>
                  <Link to="/about/3">About</Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost normal-case text-xl">BABO</a>
        </div>
        <div className="navbar-end">
          <a href="#my-modal-2">
            <button className="btn btn-ghost btn-circle">
              <BsPlusLg />
            </button>
          </a>
          <button className="btn btn-ghost btn-circle">
            <MdCalendarToday />
          </button>
        </div>
      </div>

      {/* 할일 추가 모달창 */}
      <div className="modal" id="my-modal-2">
        <TodoInput />
      </div>
    </header>
  );
};

export default Header;
