import React from "react";
import { MDBContainer, MDBCardBody, MDBInput, MDBBtn, MDBIcon } from 'mdbreact';

const SignUp = (props) => {
  return (
    <MDBContainer>
            <MDBCardBody className="mx-4">
              <div className="text-login">
                <div className="close-modal" onClick={props.closeModal}><MDBIcon icon="times-circle"/></div>
                <h2 className="dark-grey-text mb-5">
                  <strong>Sign Up</strong>
                </h2>
              </div>
              <MDBInput
                label="Email"
                icon="at"
                group
                type="email"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Username"
                icon="user"
                group
                type="email"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Password"
                icon="lock"
                group
                type="password"
                validate
                containerClass="mb-0"
              />
              <MDBInput
                label="Ulangi Password"
                icon="lock"
                group
                type="password"
                validate
                containerClass="mb-0"
              />
              <div className="text-center mb-3">
                <button className="button w-button">Buat Akun</button>
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
    </MDBContainer>
  );
};

export default SignUp;