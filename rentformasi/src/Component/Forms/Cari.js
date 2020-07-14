import React, { Component } from "react";
import Kategori from "../Dropdown/Kategori";

class Cari extends Component{
    render(){
        return(
        <div className="margin-cari">
                <div className="subscribe-cari">
                            <Kategori/>
                            <input type="text" className="input-cari subscribe-input w-input" placeholder="Masukan Kata Kunci Nama Barang" id="nama_barang1" />
                            <button className="fa fa-search prefix"/> 
                </div>
        </div>
        )
    }
}

export default Cari;