// Header.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
    faAngleDown,
    faTimes,
    faShareAlt,
} from "@fortawesome/free-solid-svg-icons";

import {
    faFacebookF,
    faInstagram,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function Header() {
    const [activeDropdown, setActiveIndex] = React.useState(false);
    // 使用 hooks 储存并设定开启关闭的状态，预设 false 为关闭

    const handleOnClick = () => {
        setActiveIndex(!activeDropdown); // 点击时开关变换状态
    };

    //设定国家
    const location = [
        "arabia",
        "australia",
        "brasil",
        "britain",
        "china",
        "czechoslovakia",
    ];

    const [modalOpen, setModalOpen] = React.useState(false);
    const handleModalClick = (status) => {
        setModalOpen(status);
    };

    const secondaryMenu = [
        "fashion",
        "beauty",
        "entertainment",
        "lifestyle",
        "luxury",
        "video",
        "Vogue有意识",
    ];

    const info = [
        "秀场图辑 RUNWAY SHOW",
        "可能研究所",
        "美人会部落格",
        "风格达人",
        "评美时尚客",
        "活动快报",
    ];

    return (
        <nav className="header">
                <div className={modalOpen === true ? "modal show" : "modal"}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <div className="modal-title">VOGUE</div>
                                <label
                                    className="close-button"
                                    onClick={() => handleModalClick(false)}
                                >
                                    <FontAwesomeIcon icon={faTimes} size="3x" />
                                </label>
                            </div>
                            <div className="modal-body">
                                <div className="modal-column">
                                    <a href="/">membership</a>
                                    <hr />
                                    <a href="/">vogue shop</a>
                                </div>
                                <div className="modal-column">
                                    {secondaryMenu.map(function (item) {
                                        return (
                                            <div>
                                                <a className="logo-font" href="/">
                                                    {item}
                                                </a>
                                                <hr />
                                            </div>
                                        );
                                    })}
                                </div>
                            <div className="modal-column">
                                {info.map(function (item) {
                                    return (
                                        <div>
                                            <a href="/">{item}</a> <hr />
                                        </div>
                                    );
                                })}
                                <div className="follow-us">follow us</div>
                                <FontAwesomeIcon
                                    icon={faFacebookF}
                                    className="social-media"
                                    size="2x"
                                />
                                <FontAwesomeIcon
                                    icon={faInstagram}
                                    className="social-media"
                                    size="2x"
                                />
                                <FontAwesomeIcon
                                    icon={faYoutube}
                                    className="social-media"
                                    size="2x"
                                />
                                <FontAwesomeIcon
                                    icon={faShareAlt}
                                    className="social-media"
                                    size="2x"
                                />
                            </div>
                            </div>
                        </div>
                    </div>
                </div>                    
                        


                <label className="menu">
                    <div className="menu-item">
                        <div className="dropdown">
                            <label
                                onClick={() => handleOnClick()}
                                className="dropdown-label"
                            >
                                <span>Taiwan</span>
                                <FontAwesomeIcon icon={faAngleDown} size="lg" className="icon" />
                            </label>
                            <div
                                className={
                                    activeDropdown === true
                                        ? "dropdown-content show"
                                        : "dropdown-content"
                                }
                            >
                                <ul>
                                    {location.map(function (country) {
                                        return (
                                            <li>
                                                <a href="/">{country}</a>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>

                    </div>
                    <div className="vl"></div>
                    <div className="menu-item">
                        <a href="/">membership</a>
                    </div>
                    <div className="vl"></div>
                    <div className="menu-item">
                        <a href="/">
                            <FontAwesomeIcon className="icon-menu" icon={faBars} size="lg" />
                        </a>
                    </div>

                </label>
            

            <div className="sub-menu">
                <a href="/">FASHION</a>
                <a href="/">BEAUTY</a>
                <a href="/">ENTERTAINMENT</a>
                <a href="/">LIFESTYLE</a>
                <a href="/">LUXURY</a>
                <a href="/">VIDEO</a>
                <a href="/">VOGUE有意識</a>
            </div>

        </nav>
    );
}