import React, { Component } from "react";

class Cari extends Component{
    render(){
        return(
        <div className="section no-padding-top">
            <div className="wrapper side-paddings">
                <div data-w-id="e89551e9-b5ae-51a6-c418-02c90497790c" className="subscribe">
                    <div className="w-form">
                        <form className="subscribe-form">
                            <input type="text" className="input subscribe-input w-input" placeholder="Nama Barang" id="nama_barang1" required="" />
                            <input type="text" className="input subscribe-input w-input" placeholder="Kategori Barang" id="kategori_barang1" required="" />
                            <input type="date" className="input subscribe-input w-input" placeholder="Tanggal Sewa" id="email-2" required="" />
                            <input type="date" className="input subscribe-input w-input" placeholder="Tanggal Kembali" id="email-2" required="" />
                            <input type="submit" value="Cari Barang" className="w-commerce-commerceaddtocartbutton button" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Cari;