import React, { useState, useRef } from "react";
import ReactPaginate from "react-paginate";
import useClick from "../hooks/useClick";
import useAxios from "../hooks/useAxios";

import intro_notice_ico from "../img/intro_notice_ico.gif";
import intro_tab_cir from "../img/intro_tab_cir.gif";
import notice_date_ico from "../img/notice_date_ico.gif";
import "./Notice.css";
import "./ReactPaginate.css";
import Board from "./Board";

const API_URL = "http://hyunnnn98.iptime.org/api";
const GET_NOTICE_LIST = `${API_URL}/notice`;
const ERR_MSG = "공지사항 목록 조회에 실패하였습니다.";
const zone = "zone";
const center = "center";
const NUM_OF_NOTICE = 4;
const NAME = {
  zone: "글로벌존",
  center: "글로벌센터",
};

// <<-- custom helper function
const alertError = (notiId = "") => {
  alert(`${notiId}${ERR_MSG}`);
};

const getFormatDate = (date) => {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  month = month >= 10 ? month : "0" + month;
  var day = date.getDate();
  day = day >= 10 ? day : "0" + day;
  return `${year}-${month}-${day}`;
};

const setClassName = (element, className) => {
  element.classList.add(className);
};
// -->>

// <<-- 공지사항 목록 생성
const setNotice = (section, boardData) => {
  // 컴포넌트로 분리 필요
  // ******************** createElement ********************
  let board = document.createElement("div");
  let title = document.createElement("div");
  let contents = document.createElement("div");
  let footer = document.createElement("div");
  let img = document.createElement("img");
  let date = document.createElement("div");
  // ******************** setAttribute ********************
  setClassName(board, "board");
  setClassName(title, "title");
  setClassName(contents, "contents");
  setClassName(footer, "footer");
  setClassName(date, "date");
  board.setAttribute("id", boardData.noti_id);
  img.setAttribute("src", { notice_date_ico }["notice_date_ico"]);
  img.setAttribute("alt", "date");
  // ******************** dataBinding ********************
  title.innerText = boardData.noti_title;
  contents.innerText = boardData.noti_content.replace(/(<([^>]+)>)/gi, "");
  date.appendChild(img);
  date.append(getFormatDate(new Date(boardData.updated_at)));
  // ******************** setBody ********************
  board.appendChild(title);
  board.appendChild(contents);
  board.addEventListener("click", viewNotice);
  // ******************** setFooter ********************
  footer.appendChild(date);
  board.appendChild(footer);
  // ************************************************************
  section.appendChild(board);
};
// -->>

// <<-- 공지사항 보기
const viewNotice = (event) => {
  console.log(event.target);
};
// -->>

// <<-- 화면 업데이트
const updateBtn = (target) => {
  let btns = target.parentElement.getElementsByClassName("btn");
  Array.from(btns).forEach((btn) => {
    btn.classList.remove("btn-selected");
  });
  target.classList.add("btn-selected");
};

const updateNoticeBoard = (data) => {
  let section = document.querySelector(".section");
  section.innerHTML = "";
  let pagination = document.getElementsByClassName("pagination")[0];
  let getData = data.data.data;
  let noticeList = getData.data;
  console.log(noticeList.length);
  if (noticeList.length) {
    pagination.style = "visibility:visible";
    noticeList.forEach((boardData) => {
      setNotice(section, boardData);
    });
  } else {
    let board = document.createElement("div");
    board.innerText = "등록된 게시글이 없습니다.";
    setClassName(board, "loading");
    section.appendChild(board);
    pagination.style = "visibility:hidden";
  }
};
// -->>

function Notice() {
  const [menu, setMenu] = useState(zone);

  // <<-- axios
  const { loading, data, error, refetch } = useAxios(
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
    alertError();
  } else if (data) {
    updateNoticeBoard(data);
  }
  // -->>

  // <<-- 화면 변경
  const updateMenu = ({ target }) => {
    refetch();
    updateBtn(target);
    setMenu(target.id);
  };

  const btnZone = useClick(updateMenu, menu);
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
          style={{ display: loading ? "block" : "none" }}
        >
          {loading && "게시글 로딩 중 입니다."}
        </div>
      </div>
      <div className="pagination">
        <ReactPaginate
          pageCount={1000}
          pageRangeDisplayed={NUM_OF_NOTICE}
          marginPagesDisplayed={0}
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={""}
          initialPage={0}
        />
      </div>
    </div>
  );
}

export default Notice;
