import React from "react";
import { NavLink } from "react-router-dom";
import { MDBContainer, MDBCol, MDBCardBody } from "mdbreact";
import ListRekening from '../Component/ListData/ListRekening';

const Tagihan = () => {
  return (
      <div className="delivery">
          <MDBCol md="12">
            <div className="tagihan">
              <MDBCardBody cascade className="text-center">
                <h1 className="font-weight-bold">
                  <div>Tagihan Pembayaran</div>
                </h1>
                <p>Terima kasih atas kepercayaan anda bertransaksi di Rentformasi. Untuk Selanjutnya mohon segera lakukan pembayaran sebesar :</p>
                <h2 className="font-weight-bold">
                  <div className="price-payment">Rp. 575.400</div>
                </h2>
                <p>Nomor Tagihan Rentformasi : RF4234293483420</p>
                <strong>*Nominal pada 3 digit terakhir merupakan kode unik transaksi anda. Harap Transfer sesuai nominal yang tertera di atas.</strong>
                <p>Harap lakukan pembayaran sebelum :</p>
                <h4 className="font-weight-bold">
                  <div className="price-payment">Rabu, 18 Desember 2019 Pukul 08.00 WIB</div>
                </h4>
                <strong>Lakukan Konfirmasi setelah melakukan pembayaran dan upload bukti pembayaran</strong>
              </MDBCardBody>
                <NavLink to="/selesai" className="nav-link-product w-nav-link">
                    <input type="submit" value="Konfirmasi Pembayaran" className="w-commerce-commerceaddtocartbutton button" />
                </NavLink>
            </div>
            <MDBContainer className="mt-5">
              <ListRekening/>
            </MDBContainer>
          </MDBCol>
        </div>
  );
}

export default Tagihan;