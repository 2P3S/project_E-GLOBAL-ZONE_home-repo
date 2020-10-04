import React from "react";
import notice_date_ico from "../img/notice_date_ico.gif";

const Board = ({ data }) => {
  return (
    <div className="board">
      <div className="title">{data.title}</div>
      <div className="contents">{data.contents}</div>
      <div className="footer">
        <div className="date">
          <img src={notice_date_ico} alt="" />
          {data.date}
        </div>
      </div>
    </div>
  );
};

export default Board;
