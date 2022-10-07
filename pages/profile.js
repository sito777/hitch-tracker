import Head from "next/head";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import { Button, Col, Row } from "react-bootstrap";
import styles from "../styles/trip.module.css";
import Link from "next/link";

export default function Profile() {
  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col md={5}>
            <Row xs={1} style={{ background: "#1669CC" }}>
              <Col style={{ position: "absolute", padding: "25px" }}>
                <Link href="/home">🏠</Link>
              </Col>
              <Col
                className={styles.headerBox}
                style={{ background: "#1669CC" }}
              >
                <h1>Profile</h1>
              </Col>
            </Row>
            <div style={{ margin: "50px" }}>
              <div style={{ marginBottom: "20px" }}>
                <p>First Name</p>
                <input
                  placeholder="Alie"
                  name="firstName"
                  style={{ border: "none" }}
                ></input>
              </div>
              <div style={{ marginBottom: "20px" }}>
                <p>Last Name</p>
                <input
                  placeholder="Kersten"
                  name="lastName"
                  style={{ border: "none" }}
                ></input>
              </div>
              <div style={{ marginBottom: "20px" }}>
                <p>Email Adress</p>
                <input
                  placeholder="alie@kersten.com"
                  name="email"
                  style={{ border: "none" }}
                ></input>
              </div>
              <div style={{ marginBottom: "20px" }}>
                <p>Phone Number</p>
                <input
                  placeholder="+43300000"
                  name="phonenumber"
                  style={{ border: "none" }}
                ></input>
              </div>
              <div style={{ marginBottom: "20px" }}>
                <p>Change Password</p>
                <input name="password" style={{ border: "none" }}></input>
              </div>
              <div style={{ marginBottom: "20px" }}>
                <p>City</p>
                <input
                  placeholder="Enter your city"
                  name="city"
                  style={{ border: "none" }}
                ></input>
              </div>
            </div>
            <Row className="justify-content-center">
              <Col xs={8}>
                <Link href="/home">
                  <Button className={styles.confirmButtonLast}>Save</Button>
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}
