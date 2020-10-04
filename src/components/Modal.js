import React from "react";
import "./Modal.css";

const Modal = ({ props }) => {
  return (
    <div className="popup board">
      <div className="view_area">
        <p className="noti_tit">{props.title}</p>
        <ul className="noti_info">
          <li>
            작성일 <span>{props.date}</span>
          </li>
          <li>
            조회수 <span>{props.views}</span>
          </li>
        </ul>

        <div className="noti_view">{props.contents}</div>
      </div>

      <div className="btn_area">
        <div className="darkGray">목록보기</div>
      </div>
    </div>
  );
};

export default Modal;
