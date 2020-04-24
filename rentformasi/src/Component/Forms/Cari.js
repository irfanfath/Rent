import React, { Component } from "react";
import Kategori from "../Dropdown/Kategori";

class Cari extends Component{
    render(){
        return(
        <div className="margin-cari">
                <div className="subscribe">
                            <Kategori/>
                            <input type="text" className="input subscribe-input w-input" placeholder="Masukan Kata Kunci Nama Barang" id="nama_barang1" />
                            <input type="submit" value="Cari Barang" className="w-commerce-commerceaddtocartbutton button" />
                </div>
        </div>
        )
    }
}

export default Cari;