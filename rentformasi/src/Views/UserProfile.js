import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Input,
  Container,
  Row,
  Col
} from "reactstrap";
// core components
import UserHeader from "../Component/UserHeader";
import { NavLink } from "react-router-dom";

class UserProfile extends React.Component {
  render() {
    return (
      <div className="section-profile">
        <UserHeader/>
        <Container className="box-profile" fluid>
          <Row>
            <div className="user-profile-box ">
              <Card className="card-profile shadow">
                <Row className="justify-content-center">
                    <div className="card-profile-image">
                      <img
                          alt="..."
                          className="rounded-circle"
                          src={require("../Component/Images/profile.jpg")}
                        />
                    </div>
                </Row>
                <CardBody className="desc-profile">
                      <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                        <div>
                          <span className="heading">350</span>
                          <span className="description">Transaksi</span>
                        </div>
                        <div>
                          <span className="heading">235</span>
                          <span className="description">Selesai</span>
                        </div>
                        <div>
                          <span className="heading">4.5</span>
                          <span className="description">Rating</span>
                        </div>
                      </div>
                  <div className="text-center">
                    <h3>
                      Jessica Jones
                      <span className="font-weight-light">, 27</span>
                    </h3>
                    <div className="h5 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      Bucharest, Romania
                    </div>
                    <div className="h5 mt-4">
                      <i className="ni business_briefcase-24 mr-2" />
                      Solution Manager - Creative Tim Officer
                    </div>
                    <div>
                      <i className="ni education_hat mr-2" />
                      University of Computer Science
                    </div>
                    <hr className="my-4" />
                    <p>
                      Ryan — the name taken by Melbourne-raised, Brooklyn-based
                      Nick Murphy — writes, performs and records all of his own
                      music.
                    </p>
                    <div className="edit-data-profile">
                      <NavLink to="/editdata"><button className="button w-button">Edit</button></NavLink>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
            <div className="edit-user-profile">
              <Card className="bg-secondary shadow">
                <CardHeader className="bg-white border-0">
                    <Col xs="8">
                      <h4 className="mb-0">Profile Saya</h4>
                    </Col>
                </CardHeader>
                <CardBody>
                    <h6 className="heading-small text-muted mb-4">
                      User information
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-username"
                            >
                              Username
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue="lucky.jesse"
                              id="input-username"
                              placeholder="Username"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-email"
                            >
                              Alamat Email
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-email"
                              placeholder="jesse@example.com"
                              type="email"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-first-name"
                            >
                              Nama Lengkap
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue="Lucky"
                              id="input-first-name"
                              placeholder="First name"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-nomor-telepon"
                            >
                              Nomor Telepon
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue="Jesse"
                              id="input-nomor-telepon"
                              placeholder="081234567890"
                              type="number"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="6">
                          <FormGroup> 
                            <label
                              className="form-control-label"
                              htmlFor="input-first-name"
                            >
                              Nomor KTP
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue="32732572384224209"
                              id="input-nomor-ktp"
                              placeholder="Nomor KTP"
                              type="number"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-nomor-rekening"
                            >
                              Nomor Rekening
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue="0748412481742817"
                              id="input-nomor-rekening"
                              placeholder="Nomor Rekening"
                              type="number"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <hr className="my-4" />
                    <h6 className="heading-small text-muted mb-4">
                      Informasi Kontak
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col md="12">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-address"
                            >
                              Alamat Lengkap
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                              id="input-address"
                              placeholder="Home Address"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-city"
                            >
                              Kota
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue="Kota Bandung"
                              id="input-city"
                              placeholder="City"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-country"
                            >
                              Provinsi
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue="Jawa Barat"
                              id="input-country"
                              placeholder="Country"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-country"
                            >
                              Kode Pos
                            </label>
                            <Input
                              className="form-control-alternative"
                              defaultValue="40291"
                              id="input-postal-code"
                              placeholder="Postal code"
                              type="number"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <button className="button w-button">Simpan Perubahan</button>
                </CardBody>
              </Card>
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}

export default UserProfile;
