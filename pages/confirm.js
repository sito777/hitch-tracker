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
                <h1>Confirm</h1>
              </Col>
            </Row>
            <Row className={`${styles.sectie} justify-content-center`}>
              <h1 className="text-center">
                <b>Amhusrt RD - New N RD</b>
              </h1>
              <Image
                src="/img/map.png"
                alt="A headshot of the driver Alice"
                className={styles.confirmMapImg}
                height={300}
                width={300}
              ></Image>
            </Row>
            <p>Tip</p>
            <Row>
              <Col xs={3} className={styles.tip}>
                <Button className={styles.tipAmount}>5%</Button>
              </Col>
              <Col xs={3} className={styles.tip}>
                <Button className={styles.tipAmount}>10%</Button>
              </Col>
              <Col xs={3} className={styles.tip}>
                <Button className={styles.tipAmount}>15%</Button>
              </Col>
              <Col xs={3}>
                <Button className={styles.tipAmount}>20%</Button>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col xs={8}>
                <Link href="/home">
                  <Button className={styles.confirmButtonLast}>
                    Pay with Credit Card
                  </Button>
                </Link>
              </Col>
            </Row>
            <div className={styles.naviButtonsThree}>
              <Row>
                <Col>
                  <Link href="/driverinfo">
                    <Button className={styles.buttonPrevious}>{`<`}</Button>
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
