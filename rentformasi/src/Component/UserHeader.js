import React from "react";
import { Container, Row, Col } from "reactstrap";
// import UserNavbar from "./UserNavbar";

class UserHeader extends React.Component {
  render() {
    return (
      <>
        <div className="user-profile-header">
          <span className="mask bg-gradient-default opacity-8" />
          <Container className="d-flex align-items-center" fluid>
            <Row>
            {/* <UserNavbar/> */}

              <Col md="10">
                <h1 className="display-2 text-white">Hello Jesse</h1>
                <p className="header-title">
                  This is your profile page. You can see the progress you've
                  made with your work and manage your projects or assigned tasks
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default UserHeader;
