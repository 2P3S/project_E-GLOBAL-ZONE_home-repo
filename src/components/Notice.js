import React from "react";
import "./Notice.css";

function Notice({data}) {
    const headStyle = {
        color: "white",
        backgroundColor: data.color
    }
    console.log(data)
    return <div className="notice">
        <div className="notice-title" style={{color: data.color}}>{data.title}</div>
        <div className="boards">
            <div className="board" style={headStyle}>
                <div className="id">순번</div>
                <div className="title">제목</div>
                <div className="views">조회수</div>
            </div>
            <div className="board">
                <div className="id">00</div>
                <div className="title">테스트 공지사항입니다.</div>
                <div className="views">00</div>
            </div>
            <div className="board">
                <div className="id">00</div>
                <div className="title">테스트 공지사항입니다.</div>
                <div className="views">00</div>
            </div>
            <div className="board">
                <div className="id">00</div>
                <div className="title">테스트 공지사항입니다.</div>
                <div className="views">00</div>
            </div>
            <div className="board">
                <div className="id">00</div>
                <div className="title">테스트 공지사항입니다.</div>
                <div className="views">00</div>
            </div>
            <div className="board">
                <div className="id">00</div>
                <div className="title">테스트 공지사항입니다.</div>
                <div className="views">00</div>
            </div>
        </div>
    </div>
}

export default Notice;