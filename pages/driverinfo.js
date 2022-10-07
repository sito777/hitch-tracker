import Head from "next/head";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import { Button, Col, Row } from "react-bootstrap";
import styles from "../styles/trip.module.css";
import Link from "next/link";

export default function DriverInfo() {
  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col md={5}>
            <Row>
              <Col style={{ position: "absolute", padding: "25px" }}>
                <Link href="/home">🏠</Link>
              </Col>
              <Col
                className={styles.headerBox}
                style={{ background: "#1669CC" }}
              >
                <h1>Driver info</h1>
              </Col>
            </Row>
            <Row className={`${styles.sectie} justify-content-center`}>
              <Col xs={4} className="offset-sm-1">
                <Image
                  src="/img/aiony-haust-3TLl_97HNJo-unsplash.jpeg"
                  alt="A headshot of the driver Alice"
                  className={styles.img}
                  height={200}
                  width={170}
                ></Image>
                <p>
                  <b>Driver:</b> Alice
                </p>
                <p>
                  <b>Age:</b> 32
                </p>
                <p>
                  <b>Gender:</b> Female
                </p>
              </Col>
              <Col xs={4} className="offset-sm-2">
                <Image
                  src="/img/hunter-newton-BgZFS8DPg0I-unsplash.jpeg"
                  alt="A headshot of the driver Alice"
                  className={styles.img}
                  height={200}
                  width={170}
                ></Image>
                <p>
                  <b>Car:</b> BMW m3
                </p>
                <p>
                  <b>Engine:</b> Twin Turbo v8
                </p>
                <p>
                  <b>Horse Power:</b> 312
                </p>
                <p>
                  <b>passengers:</b> 4
                </p>
                <p>
                  <b>Cost per km:</b> 3
                </p>
                <p>
                  <b>Color:</b> Black
                </p>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col xs={10} className="ofsset-sm-1">
                <div className={styles.line}></div>
                <p>
                  <b>Total Duration:</b> 13min
                </p>
                <p>
                  <b>Total Distance:</b> 10km
                </p>
                <p>
                  <b>Total Cost:</b> 30
                </p>
                <Link href="/confirm">
                  <Button className={styles.confirmButton}>Confirm</Button>
                </Link>
              </Col>
            </Row>
            <div className={styles.naviButtonsThree}>
              <Row>
                <Col>
                  <Link href="/selectdriver">
                    <Button className={styles.buttonPrevious}>{`<`}</Button>
                  </Link>
                </Col>
                <Col style={{ textAlign: "end" }}>
                  <Link href="/confirm">
                    <Button className={styles.buttonNext}>{`>`}</Button>
                  </Link>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
