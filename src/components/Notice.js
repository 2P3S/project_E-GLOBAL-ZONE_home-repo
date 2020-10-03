import React from "react";
import ReactPaginate from "react-paginate";
import "./Notice.css";

function Notice({data}) {
    const titleStyle = {
        color: data.color
    }
    const headStyle = {
        color: "white",
        backgroundColor: data.color,
    }
    const pageProps = {
        pageCount: 100,
        pageRangeDisplayed: 3,
        marginPagesDisplayed: 1,
        previousLabel: "\u003C",
        nextLabel: "\u003E"
    }
    return <div className="notice">
        <div
            className="notice-title"
            style={titleStyle}
        >
            {data.title}
        </div>
        <div className="boards">
            <div
                className="board"
                style={headStyle}
            >
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
        </div>
        <div className="pagination" style={headStyle}>
            <ReactPaginate
                pageCount={pageProps.pageCount}
                pageRangeDisplayed={pageProps.pageRangeDisplayed}
                marginPagesDisplayed={pageProps.marginPagesDisplayed}
                previousLabel={pageProps.previousLabel}
                nextLabel={pageProps.nextLabel}
            />
        </div>
    </div>
}

export default Notice;