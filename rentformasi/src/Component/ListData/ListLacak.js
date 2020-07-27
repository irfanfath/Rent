import React, { Component } from "react";
import DetailLacak from "../Modal/DetailLacak";

class ListLacak extends Component{
    state = {
        showDetail: false
    }
    
    render(){
        return(
            <div className="delivery">
                            <div className="wrapper">
                            <div className="title-lacak">Status Pesanan Anda</div>
                                                <div className="divider"></div>
                                <div className="side-blocks">
                                    <div className="side-block">
                                        <img src="https://www.otomotifer.com/wp-content/uploads/2019/04/Mobil-City-Car-Murah-Honda.jpg" alt="" className="side-pesanan" />
                                    </div>
                                        <div className="side-block no-padding-right">
                                            <div className="side-info">
                                               
                                                <div className="text-grey">Sedang dalam proses verifikasi oleh sistem. Proses verifikasi pesananan anda maksimal 2 x 24 jam </div>
                                                <div className="link arrow-link" onClick={()=> this.setState({showDetail: true})} >Lihat Detail Status Pesanan</div>
                                                {
                                                    this.state.showDetail ? <DetailLacak onClose={()=> this.setState({showDetail: false})} /> : null
                                                }                                               
                                            </div>
                                        </div>
                                </div>                                
                            </div>
            </div>
        )
    }
}

export default ListLacak;