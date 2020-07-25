import React, { Component } from "react";
import ListSK from "../Component/ListData/ListSK";

class SK extends Component{
    render(){
        return(
            <div className="section">
                        <div className="section no-padding-vertical">
                            <div className="wrapper-semi side-paddings">
                                <h3 className="no-margin w-hidden-small w-hidden-tiny">Syarat & Ketentuan</h3>
                            </div>
                        </div>

                <div className="section no-padding-top">
                    <div className="wrapper side-paddings">
                        <ListSK/>
                    </div>
                </div>
            </div>
        )
    }
}

export default SK;