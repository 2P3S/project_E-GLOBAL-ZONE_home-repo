import React from "react";
import ReactPaginate from "react-paginate";
import useAxios from "../hooks/useAxios";

import intro_notice_ico from "../img/intro_notice_ico.gif";
import intro_tab_cir from "../img/intro_tab_cir.gif";
import notice_date_ico from "../img/notice_date_ico.gif";
import "./Notice.css";
import "./ReactPaginate.css";

const API_URL = "http://hyunnnn98.iptime.org/api";
const GET_NOTICE_LIST = `${API_URL}/notice`;
const ERR_MSG = "공지사항 목록 조회에 실패하였습니다.";
const NUM_OF_NOTICE = 4;
const NAME = {
  zone: "글로벌존",
  center: "글로벌센터",
};

const getFormatDate = (date) => {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  month = month >= 10 ? month : "0" + month;
  var day = date.getDate();
  day = day >= 10 ? day : "0" + day;
  return `${year}-${month}-${day}`;
};

const addClassList = (element, className) => {
  element.classList.add(className);
};

const updateBtn = (element) => {
  let targetElement = element.target;
  let btns = targetElement.parentElement.getElementsByClassName("btn");

  Array.from(btns).forEach((btn) => {
    btn.classList.remove("btn-selected");
  });

  targetElement.classList.add("btn-selected");
};

const updateNoticeBoard = (data) => {
  let section = document.querySelector(".section");
  let getData = data.data.data;
  let noticeList = getData.data;

  noticeList.forEach((boardData) => {
    // 컴포넌트로 분리 필요
    let board = document.createElement("div");
    let title = document.createElement("div");
    let contents = document.createElement("div");
    let footer = document.createElement("div");
    let img = document.createElement("img");
    let date = document.createElement("div");
    let dateFormat = getFormatDate(new Date(boardData.updated_at));
    addClassList(board, "board");
    addClassList(title, "title");
    addClassList(contents, "contents");
    addClassList(footer, "footer");
    addClassList(date, "date");
    title.innerText = boardData.noti_title;
    contents.innerText = boardData.noti_content.replace(/(<([^>]+)>)/gi, "");
    img.setAttribute("src", { notice_date_ico }["notice_date_ico"]);
    img.setAttribute("alt", "date");
    date.appendChild(img);
    date.append(dateFormat);
    footer.appendChild(date);
    board.appendChild(title);
    board.appendChild(contents);
    board.appendChild(footer);
    section.appendChild(board);
  });
};

const alertError = (notiId = "") => {
  alert(`${notiId}${ERR_MSG}`);
};

function Notice() {
  const { loading, data, error, refetch } = useAxios({
    url: GET_NOTICE_LIST,
    method: "GET",
    params: {
      noti_url: "zone",
      num_of_notice: 4,
    },
  });

  if (error) {
    alertError();
  } else if (data) {
    updateNoticeBoard(data);
  }

  return (
    <div className="notice">
      <div className="head">
        <div className="title">
          <img src={intro_notice_ico} alt="공지사항" />
          NOTICE BOARD
        </div>
        <div className="btn btn-selected" onClick={updateBtn} id="zone">
          <img src={intro_tab_cir} alt="tab" />
          {NAME["zone"]}
        </div>
        <div className="btn" onClick={updateBtn} id="center">
          <img
            src={intro_tab_cir}
            alt="ta
                b"
          />
          {NAME["center"]}
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
