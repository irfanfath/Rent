import React, { Component } from "react";
import { MDBInput } from 'mdbreact';

class Login extends Component {
    state = {
        username: "",
        password: ""
    }

    render() {
        return (
        <div className="modal-show">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="container">
                        <div className="card-body mx-4">
                            <div className="text-login">
                                <div className="close-modal" onClick={this.props.onClose}><div className="fa fa-times-circle"></div></div>
                                <h2 className="dark-grey-text mb-5"><strong>Sign in</strong></h2>
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
                            <div className="font-small blue-text d-flex justify-content-end pb-3">
                                Lupa
                                <div className="modal-signin-green" onClick={this.props.LupaPass}>&nbsp;Password?</div>
                            </div>
                            <div className="text-center mb-3"><button className="button-full w-full" onClick={this.props.pindahPage}>Sign In</button></div>
                            <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">or Sign in with:</p>
                            <div className="row my-3 d-flex justify-content-center">
                                <button className="btn-white btn Ripple-parent mr-md-3 z-depth-1a">
                                    <div className="fab fa-facebook-f blue-text text-center"></div>
                                </button>
                                <button className="btn-white btn Ripple-parent mr-md-3 z-depth-1a">
                                    <div className="fab fa-twitter blue-text"></div>
                                </button>
                                <button className="btn-white btn Ripple-parent z-depth-1a">
                                    <div className="fab fa-google-plus-g blue-text"></div>
                                </button>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <div className="modal-signin">
                                Belum Punya Akun?
                                <div className="modal-signin-green" onClick={this.props.daftar}>&nbsp;Daftar Akun</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
};

export default Login;