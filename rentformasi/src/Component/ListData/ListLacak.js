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
                                <div className="side-blocks">
                                    <div className="side-block small-padding-side">
                                        <img src="https://assets.website-files.com/5badda2935e11303a89a461e/5bb5c77f0b5b7843138dc3c3_side-image-02.jpg" alt="" className="side-pesanan" />
                                    </div>
                                        <div className="side-block no-padding-right">
                                            <div className="side-info">
                                                <div className="title-lacak">Verifikasi Pembayaran Oleh Sistem</div>
                                                <div className="divider"></div>
                                                <p className="text-grey">A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy</p>
                                                <div className="link arrow-link" onClick={()=> this.setState({showDetail: true})} >Lihat Detail Status Pesanan</div>
                                                {
                                                    this.state.showDetail ? <DetailLacak /> : null
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