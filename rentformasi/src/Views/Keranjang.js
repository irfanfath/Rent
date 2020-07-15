import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Login from '../Component/Modal/Login';

class Keranjang extends Component{
    constructor(props) {
        super(props);
        this.state = {
            qty: 1,
            price: 5000,
            showLogin: false,
        };
    }

    componentDidMount(){
        //session kalo belum login
        const session = localStorage.getItem('session')
        if (session !== "active"){
            window.location.href = "#/"
        }
    }

    handleIncerement = () => {
        this.setState({
            qty: this.state.qty + 1
        });
    }

    handleDecrement = () => {
        if(this.state.qty < 2){
            this.setState({
              qty:1
            });
          }else {
            this.setState({
              qty: this.state.qty- 1,
            });
          }
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
                                            <div className="fa fa-minus-circle prefix" onClick={this.handleDecrement}></div>
                                            <input type="text" className="input-qty subscribe-keranjang w-input-qty" placeholder="Qty" id="qty" required="" value={this.state.qty} readOnly/>
                                            <div className="fa fa-plus-circle prefix" onClick={this.handleIncerement}></div>
                                        </div>
                                    </div>
                                    <div className="side-cart">
                                        <div className="title-keranjang">A successful marketing plan relies heavily on the pulling-power of advertising copy. </div>
                                        <div className="harga-keranjang">Rp. {this.state.price} </div>
                                        <button className="button w-button" onClick={this.handleCount}>12312</button>
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
                                <div className="shop-header-line"></div>
                                <div className="w-commerce-keranjang">
                                    <div className="keranjang-img"> 
                                        <img  src="https://www.otomotifer.com/wp-content/uploads/2019/04/Mobil-City-Car-Murah-Honda.jpg" alt=""/>
                                        <div className="margin-qty">
                                        <div className="title-qty">Qty</div>
                                            <div className="fa fa-minus-circle prefix"></div>
                                            <input type="text" className="input-qty subscribe-keranjang w-input-qty" placeholder="Qty" id="qty2" required="" defaultValue="1"/>
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
                                                <input type="date" className="input-tanggal subscribe-keranjang w-input" placeholder="Tanggal Sewa" id="tanggalsewa2" required="" />
                                            </div>
                                            <div className="title-date">Tanggal Kembali
                                                <input type="date" className="input-tanggal subscribe-keranjang w-input" placeholder="Tanggal Kembali" id="tanggalkembali2" required="" />
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
                                    this.state.showLogin ? <Login pindahPage={this.movePage} LupaPass={()=> this.setState({showForgotPass: true, showLogin: false})} daftar={()=> this.setState({showSignUp: true, showLogin: false})} onClose={()=> this.setState({showLogin: false})}/> : null
                                } 
                        </div>
                    </div>
                </div>
            </div>
       )
    }
}

export default Keranjang;