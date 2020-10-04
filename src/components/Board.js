import React from "react";
import notice_date_ico from "../img/notice_date_ico.gif";

const Board = ({ props }) => {
  return (
    <div className="notice-board">
      <div className="title">{props.title}</div>
      <div className="contents">{props.contents}</div>
      <div className="footer">
        <div className="date">
          <img src={notice_date_ico} alt="" />
          {props.date}
        </div>
      </div>
    </div>
  );
};

export default Board;
