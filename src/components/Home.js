import React from "react";

function Home() {
  const preventEvent = (event) => {
    event.preventDefault();
    alert(`10월 12일 오픈예정입니다.`);
  };
  return (
    <div className="intro_wrap">
      <p>
        Welcome to <span>YJU E-Global</span>
      </p>
      <p className="stxt">Online Reservation System</p>

      <div className="btn_wrap">
        <a className="ico01" href="http://gzone.yju.ac.kr">
          Global Zone <span>외국인 유학생(영어, 중국어, 일본어)</span>
        </a>
        <a
          // onClick={preventEvent}
          className="ico02"
          href="http://gcenter.yju.ac.kr"
        >
          Global Center <span>외국인 교수(영어)</span>
        </a>
      </div>
      <p className="info_txt">
        위 버튼을 클릭해서 원하는 서비스의 사이트로 이동해주세요.
      </p>
    </div>
  );
}

export default Home;
