import React from "react";
import {Link} from "react-router-dom";
import intro_logo from "../img/intro_logo.png";

function Footer() {
    return (
        <div className="foot">
            <div className="finfo">
                <div className="log">
                    <img src={intro_logo} alt="영진전문대학교 로고"/>
                </div>
                <p>
                    대표전화 053-940-5114 (41527) 대구광역시 북구 복현로 35 (복현2동 218)
                    영진전문대학교
                    <span>COPYRIGHT© YEUNGJIN UNIVERSITY. All RIGHTS RESERVED.</span>
                </p>
            </div>
            <div className="contribute">
                <p className="tit">CONTRIBUTORS</p>
                <p className="sub-tit">영진전문대학교 컴퓨터정보계열 일본 IT기업 주문반 2학년</p>
                <div>
                    <p>
                        <Link to="https://github.com/JeongJaeSoon" target="_blank">
                            JeongJaeSoon
                        </Link>
                    </p>
                    <p>
                        <Link to="https://github.com/kokomade98" target="_blank">
                            ChoSeungHyun
                        </Link>
                    </p>
                </div>
                <div>
                    <p>
                        <Link to="https://github.com/LeeGuSeul" target="_blank">
                            LeeGuSeul
                        </Link>
                    </p>
                    <p>
                        <Link to="https://github.com/LeeJaeBae" target="_blank">
                            LeeJaeWon
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
