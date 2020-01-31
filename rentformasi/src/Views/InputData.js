import React, { Component } from "react";
import DataPemesan from "../Component/Forms/DataPemesan";

class InputData extends Component{
    render(){
        return(
            <div className="page-wrapper">
                <div className="section no-padding-vertical">
                    <div className="wrapper side-paddings">
                        <div className="breadcrumbs"><div className="link-grey">Home</div><img src="https://assets.website-files.com/5badda2935e11303a89a461e/5baf79eb570913b9781a96f2_arrow-right-mini-icon.svg" alt="" className="breadcrumbs-arrow" />
                            <div>Konfirmasi data pesanan</div>
                        </div>
                    </div>
                </div>
                <DataPemesan/>
            </div>
        )
    }
}

export default InputData;