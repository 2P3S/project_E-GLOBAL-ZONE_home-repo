import React from "react";
import ReactPaginate from 'react-paginate';
import intro_notice_ico from "../img/intro_notice_ico.gif";
import intro_tab_cir from "../img/intro_tab_cir.gif"
import notice_date_ico from "../img/notice_date_ico.gif";
import "./Notice.css";
import "./ReactPaginate.css";

function Notice() {
    return <div className="notice">
        <div className="head">
            <div className="title">
                <img src={intro_notice_ico} alt="공지사항"/>
                NOTICE BOARD
            </div>
            <div className="btn btn-selected">
                <img src={intro_tab_cir} alt="tab"/>
                글로벌존
            </div>
            <div className="btn">
                <img src={intro_tab_cir} alt="tab"/>
                글로벌센터
            </div>
        </div>
        <div className="section">
            <div className="board">
                <div className="title">테스트 게시글입니다.</div>
                <div className="contents">게시글 내용입니다. 리엑트는 쉽지 않습니다. 하지만 저도 만들 수 있습니다.</div>
                <div className="footer">
                    <div className="date">
                        <img src={notice_date_ico} alt="date"/>
                        2020-10-04
                    </div>
                </div>
            </div>
            <div className="board">
                <div className="title">테스트 게시글입니다.</div>
                <div className="contents">게시글 내용입니다. 리엑트는 쉽지 않습니다. 하지만 저도 만들 수 있습니다.</div>
                <div className="footer">
                    <div className="date">
                        <img src={notice_date_ico} alt="date"/>
                        2020-10-04
                    </div>
                </div>
            </div>
            <div className="board">
                <div className="title">테스트 게시글입니다.</div>
                <div className="contents">게시글 내용입니다. 리엑트는 쉽지 않습니다. 하지만 저도 만들 수 있습니다.</div>
                <div className="footer">
                    <div className="date">
                        <img src={notice_date_ico} alt="date"/>
                        2020-10-04
                    </div>
                </div>
            </div>
            <div className="board">
                <div className="title">테스트 게시글입니다.</div>
                <div className="contents">게시글 내용입니다. 리엑트는 쉽지 않습니다. 하지만 저도 만들 수 있습니다.</div>
                <div className="footer">
                    <div className="date">
                        <img src={notice_date_ico} alt="date"/>
                        2020-10-04
                    </div>
                </div>
            </div>
        </div>
        <div className="pagination">
            <ReactPaginate
                pageCount={1000}
                pageRangeDisplayed={4}
                marginPagesDisplayed={0}
                previousLabel={"previous"}
                nextLabel={"next"}
                breakLabel={""}
                initialPage={1}
            />
        </div>
    </div>
}

export default Notice;