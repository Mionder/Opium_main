import React, { Component } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Brain from "./img/brain.png";
export default class Error404 extends Component{
    render(){
        return(
            <div className="error404">
                <Header />
                <div className="container">
                    <div className="error404_wrapper">
                        <h2 className="error_label">404</h2>
                        <img src={Brain} alt="Brain"/>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}