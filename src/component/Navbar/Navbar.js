import React from "react";

import {
  Navbar as BootStrapNavbar,
  Nav,
  NavDropdown,
  Container,
} from "react-bootstrap";
<<<<<<< HEAD
import { Link } from "react-router-dom";

=======
import { Link, NavLink, withRouter } from "react-router-dom";
>>>>>>> d43011202b9f0a4413ae7d8ca1e1e9fa77d74cd6
import Logo from "../icons/LogoIcon";
import "./Navbar.css";

import pageLink from "./pageLink";

export default function Navbar(props) {
  const [isLogined, setIsLogined] = React.useState(false);
  React.useEffect(() => {
    setIsLogined(true);
    // setIsLogined(Auth.isLogined());
  }, []);

  return (
    <BootStrapNavbar
      fixed="top"
      bg="#ffffff"
      expand="lg"
      style={{
        borderBottomWidth: 1,
        borderColor: "#c2c2c2",
        borderBottomStyle: "solid",
        background: "white",
      }}
    >
      <Container>
        <BootStrapNavbar.Brand href="#home">
          <div>
            <div style={{ display: "inline-block" }}>
              <Logo />
            </div>
            <h3
              style={{
                fontSize: 24,
                display: "inline-block",
                marginLeft: "16px",
                marginBottom: "0",
                color: " #3B72F2",
                fontWeight: "bold",
              }}
            >
              TrustBird
            </h3>
          </div>
          {/* <img
            alt=""
            src={require("../images/bird.svg")}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "} */}
        </BootStrapNavbar.Brand>
        <BootStrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootStrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className="navlink">
              <Link
                style={{ color: "inherit", textDecoration: "inherit" }}
                to="/serviceintro"
              >
                재단소개
              </Link>
            </Nav.Link>

            <Nav.Link className="navlink">
              <pageLink to="/trust" />
              신탁 계약
            </Nav.Link>

            <Nav.Link href="#service" className="navlink">
              정보소개
            </Nav.Link>
            {isLogined ? (
              <NavDropdown title="개인정보" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  멤버십 신청
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  신탁 내역 확인
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  관리비 납부내역
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  회원 정보 수정
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5">
                  회원 탈퇴
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav.Link href="../Signin" className="navlink">
                로그인
              </Nav.Link>
            )}
          </Nav>
        </BootStrapNavbar.Collapse>
      </Container>
    </BootStrapNavbar>
  );
}
