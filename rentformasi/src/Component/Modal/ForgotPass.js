import React from "react";
import { MDBContainer, MDBCardBody, MDBInput, MDBIcon } from 'mdbreact';

const ForgotPass = (props) => {
  return (
    <MDBContainer>
            <MDBCardBody className="mx-4">
              <div className="text-login">
                <div className="close-modal" onClick={props.closeModal}><MDBIcon icon="times-circle"/></div>
                <h2 className="dark-grey-text mb-5">
                  <strong>Ganti Password</strong>
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
                label="Nomor Telepon"
                icon="phone-alt"
                group
                type="number"
                validate
                containerClass="mb-0"
              />
              <div className="text-center mb-3">
                <button className="button w-button">Konfirmasi</button>
              </div>
            </MDBCardBody>
    </MDBContainer>
  );
};

export default ForgotPass;