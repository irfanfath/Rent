import React, { Component } from "react";

class Kategori extends Component{
    render(){
        return(
                                <div className="product-table">
                                    <h4>Kategori</h4>
                                    <div className="product-table-cell">
                                        <div>Kendaraan</div>
                                        <div className="product-table-info">
                                            <div>(38)</div>
                                        </div>
                                    </div>
                                    <div className="product-table-cell">
                                        <div>Alat Berat</div>
                                        <div className="product-table-info">
                                            <div>(32)</div>
                                        </div>
                                    </div>
                                    <div className="product-table-cell">
                                        <div>Elektronik</div>
                                        <div className="product-table-info">
                                            <div>(21)</div>
                                        </div>
                                    </div>
                                    <div className="product-table-cell no-border-bottom">
                                        <div>Olahraga</div>
                                        <div className="product-table-info">
                                            <div>(24)</div>
                                        </div>
                                    </div>
                                </div>                
        )
    }
}

export default Kategori;