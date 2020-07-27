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
import WishList from "./Views/WishList";
import Tagihan from "./Views/Tagihan";
import Cart from "./Views/Cart";
import LacakPesanan from "./Views/LacakPesanan";
import UserProfile from "./Views/UserProfile";
import EditProfile from "./Views/EditProfile";
// import Proses_Transaksi from "./Views/Proses_Transaksi";
// import SelesaiTransaksi from "./Views/SelesaiTransaksi";
// import Sewaan from "./Views/Sewaan";
 
class Main extends Component {
  render() {
    return (
        <HashRouter>
          <Header/>
          <DynamicScrollToTop/>
            <Route exact path="/" component={Home}/>
            <Route path="/profile" component={UserProfile}/>
            <Route path="/barang" component={Barang}/>
            <Route path="/jasa" component={Jasa}/>
            <Route path="/bantuan" component={Bantuan}/>
            <Route path="/about" component={About}/>
            <Route path="/sk" component={SK}/>
            <Route path="/product_detail/:idBarang" component={DetailProduct}/>
            <Route path="/inputdata" component={InputData}/>
            <Route path="/editdata" component={EditProfile}/>
            <Route path="/selesai" component={Selesai}/>
            <Route path="/coba" component={Percobaan}/>
            <Route path="/cart/" component={Cart}/>
            <Route path="/keranjang" component={Keranjang}/>
            <Route path="/wish" component={WishList}/>
            <Route path="/tagihan" component={Tagihan}/>
            <Route path="/lacak" component={LacakPesanan}/>
            {/* 
            <Route path="/proses_transaksi" component={Proses_Transaksi}/>
            <Route path="/selesaitransaksi" component={SelesaiTransaksi}/>
          */}
          <Footer/>
        </HashRouter>
    );
  }
}

 
export default Main;



