import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from "axios"
import Login from '../Component/Modal/Login';

class WishList extends Component{
    state = {
        showLogin: false
    }

    handleGetMenu = () => {
        axios.get('http://irfanfath.site/Rentformai_Login/users/user', {
            headers : {
                authorization : `Bearer ${localStorage.getItem('token')}`,
                Accept : 'application/json',
                "Content-Type" : 'application/json' 
            }
        }).then((res) => {
            console.log("Get Menu : ", res)
            this.setState({showLogin: false})
        }).catch((err) =>{
            console.log("Get Menu : ", err)
            window.location.href = "#/";
            this.setState({showLogin: true})
        })
    }

    componentDidMount(){
        this.handleGetMenu()
    }

    render(){
       return(
            <div className="page-wrapper">
                <div className="section no-padding-vertical">
                    <div className="wrapper side-paddings">
                        <div className="breadcrumbs"><div className="link-grey">Home</div><img src="https://assets.website-files.com/5badda2935e11303a89a461e/5baf79eb570913b9781a96f2_arrow-right-mini-icon.svg" alt="" className="breadcrumbs-arrow" />
                            <div>Konfirmasi pesanan</div>
                        </div>
                    </div>
                </div>
                <div className="section no-padding-top">
                    <div className="wrapper side-paddings">
                        <div className="keranjang">
                            <h4 className="contact-heading">Keranjang Anda : </h4>
                                <div className="w-commerce-keranjang">
                                    <div className="keranjang-img"> 
                                        <img  src="https://www.otomotifer.com/wp-content/uploads/2019/04/Mobil-City-Car-Murah-Honda.jpg" alt=""/>
                                        <div className="margin-qty">
                                        <div className="title-qty">Qty</div>
                                            <div className="fa fa-minus-circle prefix"></div>
                                            <input type="text" className="input-qty subscribe-keranjang w-input-qty" placeholder="Qty" id="qty" required="" defaultValue="1"/>
                                            <div className="fa fa-plus-circle prefix"></div>
                                        </div>
                                    </div>
                                    <div className="side-cart">
                                        <div className="title-keranjang">A successful marketing plan relies heavily on the pulling-power of advertising copy. </div>
                                        <div className="harga-keranjang">Rp. 5000 </div>
                                    </div>  
                                    <div className="w-form-date">
                                        <form className="subscribe-form-date">
                                            <div className="title-date">Tanggal Sewa
                                                <input type="date" className="input-tanggal subscribe-keranjang w-input" placeholder="Tanggal Sewa" id="tanggalsewa" required="" />
                                            </div>
                                            <div className="title-date">Tanggal Kembali
                                                <input type="date" className="input-tanggal subscribe-keranjang w-input" placeholder="Tanggal Kembali" id="tanggalkembali" required="" />
                                            </div>
                                        </form>
                                    </div>                                
                                </div>
                                <div className="shop-header-line"></div>
                                <div className="w-commerce-keranjang">
                                    <div className="keranjang-img"> 
                                        <img  src="https://www.otomotifer.com/wp-content/uploads/2019/04/Mobil-City-Car-Murah-Honda.jpg" alt=""/>
                                        <div className="margin-qty">
                                        <div className="title-qty">Qty</div>
                                            <div className="fa fa-minus-circle prefix"></div>
                                            <input type="text" className="input-qty subscribe-keranjang w-input-qty" placeholder="Qty" id="qty1" required="" defaultValue="1"/>
                                            <div className="fa fa-plus-circle prefix"></div>
                                        </div>
                                    </div>
                                    <div className="side-cart">
                                        <div className="title-keranjang">A successful marketing plan relies heavily on the pulling-power of advertising copy. </div>
                                        <div className="harga-keranjang">Rp. 5000 </div>
                                    </div>  
                                    <div className="w-form-date">
                                        <form className="subscribe-form-date">
                                            <div className="title-date">Tanggal Sewa
                                                <input type="date" className="input-tanggal subscribe-keranjang w-input" placeholder="Tanggal Sewa" id="tanggalsewa1" required="" />
                                            </div>
                                            <div className="title-date">Tanggal Kembali
                                                <input type="date" className="input-tanggal subscribe-keranjang w-input" placeholder="Tanggal Kembali" id="tanggalkembali1" required="" />
                                            </div>
                                        </form>
                                    </div>                                
                                </div>
                                <div className="w-commerce-commercecartlist cart-list"> 
                                    <div className="w-commerce-commercecartfooter cart-footer">
                                        <div className="w-commerce-commercecartlineitem">
                                            <div>Subtotal</div>
                                            <div className="w-commerce-commercecartordervalue">Rp. 5000</div>
                                        </div>
                                    </div> 
                                    <div className="margin-button-keranjang">
                                        <NavLink to="/inputdata"><button className="button-full w-full">Bayar Sekarang</button></NavLink>
                                        <NavLink to="/"><button className="button-white w-full-white">Sewa Lagi</button></NavLink>
                                    </div>
                                </div>  
                                {
                                this.state.showLogin ? <Login 
                                    pindahPage={this.handlePostLogin}
                                    LupaPass={()=> this.setState({showForgotPass: true, showLogin: false})}
                                    daftar={()=> this.setState({showSignUp: true, showLogin: false})}
                                    onClose={()=> this.setState({showLogin: false})}
                                    failLogin={this.state.failLogin}
                                    /> : null
                            }   
                        </div>
                    </div>
                </div>
            </div>
       )
    }
}

export default WishList