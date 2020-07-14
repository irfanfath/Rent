import React, { Component } from "react";
import ListLacak from "../Component/ListData/ListLacak";

class LacakPesanan extends Component{
    render(){
        return(
            <div className="section">
                <div className="section no-padding-top">
                    <div className="wrapper">
                        <ListLacak/>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default LacakPesanan;