import React, { Component } from "react";
import Lokasi from "./Lokasi";
import Urutan from "./Urutan";

class Sorting extends Component{
    render(){
        return(
            <div className="shop-categories-wrapper">
                <div className="w-dyn-list">
                    <div className="shop-categories w-dyn-items">
                        <div className="w-dyn-sorting">
                            <Urutan/>
                            <Lokasi/>
                        </div>
                        {/* <div className="w-dyn-item"><Lokasi/></div> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default Sorting;