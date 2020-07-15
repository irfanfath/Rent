import React, { Component } from "react";
import { MDBInput } from 'mdbreact';

class SignUp extends Component {
    state = {
        username: "",
        email: "",
        password: "",
        ulangipassword: ""
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
                                <h2 className="dark-grey-text mb-5"><strong>Daftar Akun</strong></h2>
                            </div>
                            {/* <div className="md-form">
                                <div className="fa fa-at prefix"></div>
                                <input type="email" className="form-control" value="" placeholder="Email" onChange={(e) => this.setState({email: e.target.value})}/>
                            </div>
                            <div className="md-form">
                                <div className="fa fa-user prefix"></div>
                                <input type="email" className="form-control" value="" placeholder="Username" onChange={(e) => this.setState({username: e.target.value})}/>
                            </div>
                            <div className="md-form">
                                <div className="fa fa-lock prefix"></div>
                                <input type="password" className="form-control" value="" placeholder="Password" onChange={(e) => this.setState({password: e.target.value})}/>
                            </div>
                            <div className="md-form">
                                <div className="fa fa-lock prefix"></div>
                                <input type="password" className="form-control" value="" placeholder="Ulangi Password" onChange={(e) => this.setState({ulangpassword: e.target.value})}/>
                            </div> */}
                            <MDBInput
                                label="Email"
                                icon="at"
                                type="email"
                                onInput={(e) => this.setState({email: e.target.value})}
                            />
                            <MDBInput
                                label="Username"
                                icon="user"
                                type="text"
                                onInput={(e) => this.setState({username: e.target.value})}
                            />
                            <MDBInput
                                label="Password"
                                icon="lock"
                                type="password"
                                onInput={(e) => this.setState({password: e.target.value})}
                            />
                            <MDBInput
                                label="Ulangi Password"
                                icon="lock"
                                type="password"
                                onInput={(e) => this.setState({ulangipassword: e.target.value})}
                            />
                            <div className="text-center mb-3"><button className="button-full w-full" onClick={this.props.pindahPage}>Sign Up</button></div>
                            <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">or Sign Up with:</p>
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
                    </div>
                </div>
            </div>
        </div>
        )
    }
};

export default SignUp;