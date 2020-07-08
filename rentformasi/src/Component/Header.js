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
        loginModal: false
      };
      toggleModal = state => {
        this.setState({
          [state]: !this.state[state]
        });
      };

      moveWish = () => {
          window.location.href = "#/wish"
      }

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
                            </nav>
                            <div className="w-commerce-commercecartopenlink cart-button w-inline-block">
                                <NavLink to="/wish" className="w-inline-block">WishList</NavLink>
                                <img src="https://img.icons8.com/material-outlined/24/000000/wish-list.png" alt="" className="cart-icon" onClick={this.moveWish} />
                                <div className="w-commerce-commercecartopenlinkcount item-count">0</div>
                            </div>
                        </div>
                        <div className="w-commerce-commercecartopenlink cart-button w-inline-block" onClick={() => this.toggleModal("loginModal")}><ButtonLogin/>
                            <Modal
                                className="modal-dialog-centered"
                                isOpen={this.state.loginModal}
                                toggle={() => this.toggleModal("loginModal")}
                                >
                                <SignIn/>
                            </Modal>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;