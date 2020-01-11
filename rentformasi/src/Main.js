import React, { Component } from "react";
import { Route, HashRouter } from "react-router-dom";
import DynamicScrollToTop from "./Component/DynamicScrollToTop";
import Header from "./Component/Header";
import Footer from "./Component/Footer";

import Home from "./Views/Home";
import Barang from "./Views/Barang";
import Jasa from "./Views/Jasa";
import Bantuan from "./Views/Bantuan";
import About from "./Views/About";
import SK from "./Views/SK";
import DetailProduct from "./Views/DetailProduct";
import InputData from "./Views/InputData";
import Selesai from "./Views/Selesai";
import Percobaan from "./Views/Percobaan";
import Keranjang from "./Views/Keranjang";
// import Proses_Transaksi from "./Views/Proses_Transaksi";
// import Konfirmasi from "./Views/Konfirmasi";
// import SelesaiTransaksi from "./Views/SelesaiTransaksi";
// import Sewaan from "./Views/Sewaan";
// import Cart from "./Views/Cart";
 
class Main extends Component {
  render() {
    return (
        <HashRouter>
          <Header/>
          <DynamicScrollToTop/>
            <Route exact path="/" component={Home}/>
            <Route path="/barang" component={Barang}/>
            <Route path="/jasa" component={Jasa}/>
            <Route path="/bantuan" component={Bantuan}/>
            <Route path="/about" component={About}/>
            <Route path="/sk" component={SK}/>
            <Route path="/product_detail/:idBarang" component={DetailProduct}/>
            <Route path="/inputdata" component={InputData}/>
            <Route path="/selesai" component={Selesai}/>
            <Route path="/coba" component={Percobaan}/>
            <Route path="/keranjang" component={Keranjang}/>
            {/* 
            <Route path="/proses_transaksi" component={Proses_Transaksi}/>
            <Route path="/konfirmasi" component={Konfirmasi}/>
            <Route path="/selesaitransaksi" component={SelesaiTransaksi}/>
            <Route path="/cart" component={Cart}/>
          */}
          <Footer/>
        </HashRouter>
    );
  }
}

 
export default Main;



