import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { MDBCollapse } from "mdbreact";
import ButtonLogin from "./Button/ButtonLogin";
// import SignIn from "./Modal/SignIn";
import UserNavbar from "../Component/UserNavbar";
import Login from "./Modal/Login";
import ForgotPass from "./Modal/ForgotPass";
import SignUp from "./Modal/SignUp";

class Header extends Component{
    state = {
        collapseID: "",
        showLogin: false,
        showForgotPass: false,
        showSignUp: false,
        // loginModal: false,
        session : localStorage.getItem("session")
      };
      toggleCollapse = collapseID => () => {
        this.setState(prevState => ({
          collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }));
      }
    //   toggleModal = state => {
    //     this.setState({
    //       [state]: !this.state[state]
    //     });
    //   };

      movePage = () => {
        localStorage.setItem('session', "active");
        this.setState({
            showLogin: false
        })
      }

      moveGantiPass = () => {
          this.setState({
              showForgotPass: false
          })
      }

      moveSignUp = () => {
        this.setState({
            showSignUp: false
        })
    }

      moveWish = () => {
          window.location.href = "#/wish"
      }

      moveCart = () => {
        window.location.href = "#/keranjang"
    }
      
      moveProfile = () => {
          window.location.href = "#/profile"
      }

      handleLogout = () => {
        //   localStorage.removeItem('session')
          localStorage.clear();
          window.location.href = "/"
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
                                <NavLink to="/" className="nav-link w-nav-link">FAQ</NavLink>
                                <NavLink to="/bantuan" className="nav-link w-nav-link">Bantuan</NavLink>
                                <NavLink to="/" className="nav-link w-nav-link">Daftar Menjadi Vendor</NavLink>
                            </nav>
                            <div className="menu-button w-nav-button">
                                <div className="w-icon-nav-menu" onClick={this.toggleCollapse("basicCollapse")}></div>
                            </div>
    
                            {/* {
                                this.state.session === "active"? <UserNavbar /> : <div className="w-commerce-commercecartopenlink cart-button w-inline-block" onClick={() => this.toggleModal("loginModal")}><ButtonLogin/>
                                                                                    <Modal
                                                                                        className="modal-dialog-centered"
                                                                                        isOpen={this.state.loginModal}
                                                                                        toggle={() => this.toggleModal("loginModal")}
                                                                                        >
                                                                                        <SignIn
                                                                                        closeModal={() => this.toggleModal("loginModal")}/>
                                                                                    </Modal>
                                                                                </div>
                            } */}
                            {
                                this.state.session === "active"? <UserNavbar Logout={this.handleLogout} Wish={this.moveWish} Profile={this.moveProfile} Cart={this.moveCart} /> :  <ButtonLogin klik={()=> this.setState({showLogin: true})} />

                            }
                            {
                                this.state.showLogin ? <Login pindahPage={this.movePage} LupaPass={()=> this.setState({showForgotPass: true, showLogin: false})} daftar={()=> this.setState({showSignUp: true, showLogin: false})} onClose={()=> this.setState({showLogin: false})}/> : null
                            }
                            {
                                this.state.showForgotPass ? <ForgotPass pindahPage={this.moveGantiPass} onClose={()=> this.setState({showForgotPass: false})}/> : null
                            }
                            {
                                this.state.showSignUp ? <SignUp pindahPage={this.moveSignUp} onClose={()=> this.setState({showSignUp: false})}/> : null
                            }
                            
                        </div>
                    </div>
                    <div className="collapse-header">
                        <MDBCollapse id="basicCollapse" isOpen={this.state.collapseID}>
                            <div className="value-header-collapse">
                                <NavLink className="isi-header-collapse" to="/jasa">FAQ</NavLink>
                                <NavLink className="isi-header-collapse" to="/bantuan">Bantuan</NavLink>
                                <NavLink className="isi-header-collapse" to="/jasa">Daftar Menjadi Vendor</NavLink>
                            </div>                           
                        </MDBCollapse>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;