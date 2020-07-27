import React, { Component } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Discuss from "../Discuss/Discuss";
import "./blogPage.css";
import blogImg1 from "./img/blog_item1.png";
import blogImg2 from "./img/blog_item2.png";
import blogImg3 from "./img/blog_item3.png";
export default class BlogPage extends Component{
    render(){
        return(
            <div className="blog_page">
                <Header />
                <div className="blog_page-blue-blur"></div>
                <div className="blog_page-viollet-blur"></div>
                <div className="container">
                        <h2 className="blog_page-title">Blog</h2>
                    <div className="blog_page_wrapper">
                        <div className="blog_page-item">
                            <img src={blogImg1} alt="" className="blog_page-item_img"/>
                            <div className="blog_page-text_block">
                                <h3 className="blog_page-item_title">UX-research of an Online Banking App: our experience, mistakes and discoveries</h3>
                                <p className="blog_page-item_subtitle">Let’s try to figure out how designers use colors in UI and how the whole thing can be standardized without restricting designers</p>
                                <a href="https://medium.com/@opium.pro" className="blog_page-item_link">
                                <svg className="" width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M27.6062 2.91625L30 0.62625V0.125H21.7075L15.7975 14.835L9.07374 0.125H0.378742V0.62625L3.17499 3.9925C3.44749 4.24125 3.58999 4.605 3.55374 4.97125V18.2C3.63999 18.6763 3.48499 19.1663 3.14999 19.5125L-7.62939e-06 23.33V23.825H8.93124V23.3238L5.78124 19.5125C5.43999 19.165 5.27874 18.6838 5.34749 18.2V6.7575L13.1875 23.8313H14.0987L20.84 6.7575V20.3588C20.84 20.7175 20.84 20.7913 20.605 21.0263L18.18 23.3725V23.875H29.945V23.3738L27.6075 21.085C27.4025 20.93 27.2962 20.67 27.34 20.4175V3.58375C27.2962 3.33 27.4012 3.07 27.6062 2.91625Z" fill="#212121"/>
                                </svg>
                                <span>Read on Medium</span>
                                </a>
                                <div className="blog_page-item_footer">
                                    <p className="blog_page-publication_time">15 min read</p>
                                    <p className="blog_page-publication_date">May 24. 2020</p>
                                </div>
                            </div>
                        </div>
                        <div className="blog_page-item">
                            <img src={blogImg2} alt="" className="blog_page-item_img"/>
                            <div className="blog_page-text_block">
                                <h3 className="blog_page-item_title">UX-research of an Online Banking App: our experience, mistakes and discoveries</h3>
                                <p className="blog_page-item_subtitle">Hi. I’m the CDO at Russian IT-company and I wanted to talk to you about the ways we conducted usability testing of our mobile application</p>
                                <a href="https://medium.com/@opium.pro" className="blog_page-item_link">
                                <svg className="" width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M27.6062 2.91625L30 0.62625V0.125H21.7075L15.7975 14.835L9.07374 0.125H0.378742V0.62625L3.17499 3.9925C3.44749 4.24125 3.58999 4.605 3.55374 4.97125V18.2C3.63999 18.6763 3.48499 19.1663 3.14999 19.5125L-7.62939e-06 23.33V23.825H8.93124V23.3238L5.78124 19.5125C5.43999 19.165 5.27874 18.6838 5.34749 18.2V6.7575L13.1875 23.8313H14.0987L20.84 6.7575V20.3588C20.84 20.7175 20.84 20.7913 20.605 21.0263L18.18 23.3725V23.875H29.945V23.3738L27.6075 21.085C27.4025 20.93 27.2962 20.67 27.34 20.4175V3.58375C27.2962 3.33 27.4012 3.07 27.6062 2.91625Z" fill="#212121"/>
                                </svg>
                                <span>Read on Medium</span>
                                </a>
                                <div className="blog_page-item_footer">
                                    <p className="blog_page-publication_time">15 min read</p>
                                    <p className="blog_page-publication_date">May 24. 2020</p>
                                </div>
                            </div>
                        </div>
                        <div className="blog_page-item">
                            <img src={blogImg3} alt="" className="blog_page-item_img"/>
                            <div className="blog_page-text_block">
                                <h3 className="blog_page-item_title">UX-research of an Online Banking App: our experience, mistakes and discoveries</h3>
                                <p className="blog_page-item_subtitle">Hi. I’m the CDO at Russian IT-company and I wanted to talk to you about the ways we conducted usability testing of our mobile application</p>
                                <a href="https://www.youtube.com/watch?time_continue=2&v=qAGPmxFOloI&feature=emb_logo" className="blog_page-item_link">
                                <svg className="" width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M27.6062 2.91625L30 0.62625V0.125H21.7075L15.7975 14.835L9.07374 0.125H0.378742V0.62625L3.17499 3.9925C3.44749 4.24125 3.58999 4.605 3.55374 4.97125V18.2C3.63999 18.6763 3.48499 19.1663 3.14999 19.5125L-7.62939e-06 23.33V23.825H8.93124V23.3238L5.78124 19.5125C5.43999 19.165 5.27874 18.6838 5.34749 18.2V6.7575L13.1875 23.8313H14.0987L20.84 6.7575V20.3588C20.84 20.7175 20.84 20.7913 20.605 21.0263L18.18 23.3725V23.875H29.945V23.3738L27.6075 21.085C27.4025 20.93 27.2962 20.67 27.34 20.4175V3.58375C27.2962 3.33 27.4012 3.07 27.6062 2.91625Z" fill="#212121"/>
                                </svg>
                                <span>Watch on Youtube</span>
                                </a>
                                <div className="blog_page-item_footer">
                                    <p className="blog_page-publication_time">15 min read</p>
                                    <p className="blog_page-publication_date">May 24. 2020</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Discuss />
                <Footer />
            </div>
        )
    }
}