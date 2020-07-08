import React, { Component } from "react";
import ListLacak from "../Component/ListData/ListLacak";

class LacakPesanan extends Component{
    render(){
        return(
            <div className="section">
                <div className="section no-padding-top">
                    <div className="wrapper">
                        {/* <div className="section no-padding-vertical">
                            <div className="wrapper side-paddings">
                                <div className="title-subtitle">Lacak Status Pesanan Anda</div>
                            </div>
                        </div> */}
                        <ListLacak/>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default LacakPesanan;