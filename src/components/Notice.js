// ========== import pkg ==========
import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import Popup from "reactjs-popup";
// ========== import component ==========
import Board from "./Board";
import Modal from "./Modal";
// ========== import hooks ==========
import useClick from "../hooks/useClick";
import useAxios from "../hooks/useAxios";
// ========== import img ==========
import intro_notice_ico from "../img/intro_notice_ico.gif";
import intro_tab_cir from "../img/intro_tab_cir.gif";
// ========== import css ==========
import "./Notice.css";
import "./ReactPaginate.css";
import "reactjs-popup/dist/index.css";

const GET_NOTICE_LIST = "http://www.94soon.net/api/notice";
const ERR_MSG = "공지사항 목록 조회에 실패하였습니다.";
const zone = "zone";
const center = "center";
const NUM_OF_NOTICE = 4;
const NAME = {
  zone: "글로벌존",
  center: "글로벌센터",
};

const updateNoticeList = (board) => {
  return {
    id: board.noti_id,
    title: board.noti_title,
    contents: board.noti_content.replace(/(<([^>]+)>)/gi, ""),
    date: board.updated_at.split(" ")[0],
    views: board.noti_views,
  };
};

const updateBtn = (target) => {
  let btns = target.parentElement.getElementsByClassName("btn");
  Array.from(btns).forEach((btn) => {
    btn.classList.remove("btn-selected");
  });
  target.classList.add("btn-selected");
};

function Notice() {
  const [menu, setMenu] = useState(zone);
  const noticeList = [];

  // <<-- axios
  const { loading, data, error } = useAxios(
    {
      url: GET_NOTICE_LIST,
      method: "GET",
      params: {
        noti_url: menu,
        num_of_notice: 4,
      },
    },
    menu,
  );

  if (error) {
    alert(`${NAME[menu]} ${ERR_MSG}`);
  } else if (data) {
    let getData = data.data.data.data;
    getData.forEach((board) => {
      noticeList.push(updateNoticeList(board));
    });
  }
  // -->>

  // <<-- 화면 변경
  const updateMenu = ({ target }) => {
    updateBtn(target);
    setMenu(target.id);
  };

  const btnZone = useClick(updateMenu);
  const btnCenter = useClick(updateMenu);
  // -->>

  return (
    <div className="notice">
      <div className="head">
        <div className="title">
          <img src={intro_notice_ico} alt="공지사항" />
          NOTICE BOARD
        </div>
        <div className="btn btn-selected" ref={btnZone} id="zone">
          <img src={intro_tab_cir} alt="tab" />
          {NAME[zone]}
        </div>
        <div className="btn" ref={btnCenter} id="center">
          <img src={intro_tab_cir} alt="tab" />
          {NAME[center]}
        </div>
      </div>
      <div className="section">
        <div
          className="loading"
          style={{
            display: loading || noticeList.length === 0 ? "block" : "none",
          }}
        >
          {loading && "게시글 로딩 중 입니다."}
          {!loading && noticeList.length === 0 && "등록된 게시글이 없습니다."}
        </div>
        {noticeList.map((board, index) => (
          <Popup
            key={index}
            trigger={
              <button className="button">
                <Board key={index} props={board} className="button"></Board>
              </button>
            }
            modal
          >
            <span>
              <Modal props={board} menu={menu} />
            </span>
          </Popup>
        ))}
      </div>
      <div className="pagination">
        <ReactPaginate
          pageCount={1000}
          pageRangeDisplayed={NUM_OF_NOTICE}
          marginPagesDisplayed={0}
          previousLabel={"prev"}
          nextLabel={"next"}
          breakLabel={""}
          initialPage={0}
        />
      </div>
    </div>
  );
}

export default Notice;
