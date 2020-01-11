import React, { Component } from "react";
import ListBantuan from "../Component/ListData/ListBantuan";

class Bantuan extends Component{
    render(){
        return(
            <div className="section">
                <div className="section no-padding-top">
                    <div className="wrapper">
                        <div className="section no-padding-vertical">
                            <div className="wrapper side-paddings">
                                <h3 className="no-margin w-hidden-small w-hidden-tiny">Bantuan</h3>
                            </div>
                        </div>
                        <ListBantuan/>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Bantuan;