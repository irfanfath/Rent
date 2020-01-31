import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import ButtonLogin from "./Button/ButtonLogin";
import {
    Modal
  } from "reactstrap";
// import CartValue from "./Modal/CartValue";
import SignIn from "./Modal/SignIn";

class Header extends Component{
    state = {
        exampleModal: false,
        loginModal: false
      };
      toggleModal = state => {
        this.setState({
          [state]: !this.state[state]
        });
      };

    render(){
        return(
            <div data-collapse="medium" data-animation="default" data-duration="400" className="nav-bar w-nav">
                <div className="nav-main">
                    <div className="wrapper nav-bar-wrapper">
                        <NavLink to="/" className="brand w-nav-brand w--current">
                                Rentformasi
                        </NavLink>
                        <div className="navigation">
                            <nav role="navigation" className="nav-menu w-nav-menu">
                                <NavLink to="/barang" className="nav-link w-nav-link">Sewa Barang</NavLink>
                                <NavLink to="/jasa" className="nav-link w-nav-link">Sewa Jasa</NavLink>
                                <NavLink to="/bantuan" className="nav-link w-nav-link">Bantuan</NavLink>
                                <NavLink to="/coba"><i className="material-icons">cart</i></NavLink>
                            </nav>
                            <div className="w-commerce-commercecartopenlink cart-button w-inline-block">
                                <NavLink to="/wish" className="w-inline-block">Wish List</NavLink>
                                <img src="https://img.icons8.com/material-outlined/24/000000/wish-list.png" alt="" className="cart-icon" onClick={() => this.toggleModal("exampleModal")} />
                                <div className="w-commerce-commercecartopenlinkcount item-count" onClick={() => this.toggleModal("exampleModal")}>0</div>
                            </div>
                                {/* <Modal
                                    className="modal-dialog-centered"
                                    isOpen={this.state.exampleModal}
                                    toggle={() => this.toggleModal("exampleModal")}
                                    >
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">
                                        Wish List Anda
                                        </h5>
                                        <button
                                        aria-label="Close"
                                        className="close"
                                        data-dismiss="modal"
                                        type="button"
                                        onClick={() => this.toggleModal("exampleModal")}
                                        >
                                        <span aria-hidden={true}>×</span>
                                        </button>
                                    </div>
                                    <CartValue/>
                                    <div className="modal-footer">
                                        <NavLink to="/keranjang" className="nav-link-product w-nav-link">
                                            <input type="submit" value="Lihat Semua" className="w-commerce-commerceaddtocartbutton button" onClick={() => this.toggleModal("exampleModal")}/>
                                        </NavLink>
                                    </div>
                                </Modal> */}
                        </div>
                        <div className="nav-link w-nav-link" onClick={() => this.toggleModal("loginModal")}><ButtonLogin/>
                            <Modal
                                className="modal-dialog-centered"
                                isOpen={this.state.loginModal}
                                toggle={() => this.toggleModal("loginModal")}
                                >
                                <SignIn/>
                                <div className="modal-footer">
                                <p className="font-small grey-text d-flex justify-content-end">
                                    Belum Punya Akun?
                                    <NavLink to="/proses_transaksi" className="blue-text ml-1" onClick={() => this.toggleModal("loginModal")}>
                                    Daftar Akun
                                    </NavLink>
                                </p>
                                </div>
                            </Modal>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;