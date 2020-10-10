import React from "react";
import useAxios from "../hooks/useAxios";
import useClick from "../hooks/useClick";
import "../style/Modal.css";

const GET_NOTICE_IMG = "http://gzone.yjuweb.org/api/notice";
const ERR_MSG = "게시글 조회에 실패하였습니다.";
const NAME = {
  zone: "글로벌존",
  center: "글로벌센터",
};

const Modal = ({ props, menu }) => {
  const imgList = [];

  // <<-- axios
  const { data, error } = useAxios(
    {
      url: `${GET_NOTICE_IMG}/${props.id}`,
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
    let getData = data.data.data;
    getData.forEach(({ noti_img }) => {
      imgList.push(noti_img);
    });
  }
  // -->>

  const test = () => {
    let tag = document.getElementById("popup-root");
    tag.remove();
  };
  const closeBtn = useClick(test);
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
        <div className="modal-imgs">
          {imgList.map((img, index) => (
            <img className="modal-img" key={index} src={img} alt="이미지"></img>
          ))}
          <div className="noti_view" dan>
            <div dangerouslySetInnerHTML={{ __html: props.contents }}></div>
          </div>
        </div>
      </div>

      <div className="btn_area">
        <div className="darkGray" ref={closeBtn}>
          닫기
        </div>
      </div>
    </div>
  );
};

export default Modal;
