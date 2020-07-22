import React, { Component } from "react";
import { MDBContainer, MDBCardBody, MDBInput, MDBBtn, MDBIcon } from 'mdbreact';
import { Modal } from "reactstrap";
import SignUp from "./SignUp";
import ForgotPass from "./ForgotPass";
import axios from "axios";

class SignIn extends Component {
  state = {
    RegisterModal: false,
    ForgotModal: false,
    username: "",
    password: "",
  };
  toggleModal = state => {
    this.setState({
      [state]: !this.state[state],
    });
  };

  movePage = () => {
    localStorage.setItem('session', "active")
    window.location.href = "/";
  }

  handlePostLogin = () => {
    console.log("login")

    const data = {
      username : this.state.username,
      password: this.state.password
    }

    axios.post('http://localhost:4000/users/authenticate', data)
    .then((res) => {
      if(res.data.code === 0){
        alert("success")
      }else{
        alert(res.data.message)
      }
    }).catch((err) => {

    })
  }

  render () {
    return (
      <MDBContainer>
            <MDBCardBody className="mx-4">
              <div className="text-login">
              <div className="close-modal" onClick={this.props.closeModal}><MDBIcon icon="times-circle"/></div>
                <h2 className="dark-grey-text mb-5">
                  <strong>Sigceecßßn in</strong>
                </h2>
              </div>
              <MDBInput
                label="Username"
                icon="user"
                type="email"
                onInput={(e) => this.setState({username: e.target.value})}
              />
              <MDBInput
                label="Password"
                icon="lock"
                type="password"
                onInput={(e) => this.setState({password: e.target.value})}
              />
              <div className="font-small blue-text d-flex justify-content-end pb-3">Lupa
                <div className="modal-signin-green" onClick={() => this.toggleModal("ForgotModal")}>&nbsp;Password?
                  <Modal
                      className="modal-dialog-centered"
                      isOpen={this.state.ForgotModal}
                      toggle={() => this.toggleModal("ForgotModal")}
                    >
                    <ForgotPass
                      closeModal={() => this.toggleModal("ForgotModal")}
                    />
                    </Modal>
                </div>
              </div>
              <div className="text-center mb-3">
                {/* <button className="button w-button" onClick={this.movePage}>Sign In</button> */}
                <button className="button w-button" onClick={this.handlePostLogin}>Sign In</button>
              </div>
              <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">
                or Sign in with:
              </p>
              <div className="row my-3 d-flex justify-content-center">
                <MDBBtn
                  type="button"
                  color="white"
                  rounded
                  className="mr-md-3 z-depth-1a"
                >
                  <MDBIcon fab icon="facebook-f" className="blue-text text-center" />
                </MDBBtn>
                <MDBBtn
                  type="button"
                  color="white"
                  rounded
                  className="mr-md-3 z-depth-1a"
                >
                  <MDBIcon fab icon="twitter" className="blue-text" />
                </MDBBtn>
                <MDBBtn
                  type="button"
                  color="white"
                  rounded
                  className="z-depth-1a"
                >
                  <MDBIcon fab icon="google-plus-g" className="blue-text" />
                </MDBBtn>
              </div>
            </MDBCardBody>
            <div className="modal-footer">
                <div className="modal-signin">
                  Belum Punya Akun?
                  <div className="modal-signin-green" onClick={() => this.toggleModal("RegisterModal")}>&nbsp;Daftar Akun
                    <Modal
                      className="modal-dialog-centered"
                      isOpen={this.state.RegisterModal}
                      toggle={() => this.toggleModal("RegisterModal")}
                    >
                      <SignUp
                        closeModal={() => this.toggleModal("RegisterModal")}
                      />
                    </Modal>
                    </div>
                </div>
            </div>
    </MDBContainer>
    )
  }
}

export default SignIn;