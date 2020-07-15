import React, { Component } from 'react';
import axios from "axios";
import Recipe from '../Component/Recipe/Recipe';
import ListWish from '../Component/ListData/ListWish';

class WishList extends Component{
    state = {
        post: []
    }

    getPostAPI = () => {
        axios.get('http://localhost:3001/wishlist')
        .then((result)=>{
            this.setState({
                post: result.data
            })
        })
    }

    // componentDidMount(){
    //     this.getPostAPI();
    // }

    componentDidMount(){
        this.getPostAPI();
        //session kalo belum login
        const session = localStorage.getItem('session')
        if (session !== "active"){
            window.location.href = "#/"
        }
    }

    render(){
       return(
            <div className="section">
                <div className="section no-padding-top">
                    <div className="wrapper">
                        <div className="contacts">
                            <div className="form-wishlist">
                                <h4 className="contact-heading">Keranjang Anda : </h4>
                                <div className="w-commerce-keranjang">
                                    <div className="keranjang-img"> 
                                        <img src="https://www.otomotifer.com/wp-content/uploads/2019/04/Mobil-City-Car-Murah-Honda.jpg" alt=""/>
                                    </div>
                                    <div className="w-commerce-produk">
                                        <div className="title-keranjang">eughuehfwhiwfefwewfewfw</div>
                                        <div className="harga-keranjang">Harga : Rp. 5000</div> 
                                        {/* <button className="cart-remove-link">Hapus Dari Daftar</button> */}
                                    </div>    
                                    <div className="w-form-date">
                                        <form className="subscribe-form-date">
                                            <div className="title-date">Tanggal Sewa
                                                <input type="date" className="input subscribe-keranjang w-input" placeholder="Tanggal Sewa" id="tanggalsewa" required="" />
                                            </div>
                                            <div className="title-date">Tanggal Kembali
                                                <input type="date" className="input subscribe-keranjang w-input" placeholder="Tanggal Kembali" id="tanggalkembali" required="" />
                                            </div>
                                        </form>
                                    </div>                                
                                </div>
                                <Recipe/>
                            </div>
                            <button className="button-full w-half">Bayar Sekarang</button>
                        </div>
                    </div>
                </div>
            </div>
       )
    }
}

export default WishList