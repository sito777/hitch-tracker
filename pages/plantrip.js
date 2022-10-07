import Head from "next/head";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import { Button, Col, Row } from "react-bootstrap";
import styles from "../styles/trip.module.css";
import Link from "next/link";

export default function PlanTrip() {
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
                <h1>Plan A Trip</h1>
              </Col>
            </Row>
            <Row>
              <Col className={styles.sectie}>
                <input
                  className={styles.planDate}
                  placeholder="ENTER DATE"
                  type="date"
                ></input>
              </Col>
            </Row>
            <Row>
              <Col className="offset-sm-1">
                <p style={{ marginBottom: "0px", paddingTop: "20px" }}>From</p>
              </Col>
            </Row>
            <Row>
              <Col xs={1}>•</Col>
              <Col xs={11}>
                <input
                  placeholder="Current Location"
                  name="currentLocation"
                  type="text"
                  className={styles.inputTrip}
                ></input>
              </Col>
            </Row>
            <Row>
              <Col className="offset-sm-1">
                <p style={{ marginBottom: "0px", paddingTop: "20px" }}>To</p>
              </Col>
            </Row>
            <Row>
              <Col xs={1}>•</Col>
              <Col xs={11}>
                <input
                  placeholder="Destination"
                  name="destination"
                  type="text"
                  className={styles.inputTrip}
                ></input>
              </Col>
            </Row>
            <Row>
              <div className={styles.sectie}>
                <Button className={styles.passengers}>1</Button>
                <Button className={styles.passengers}>2</Button>
                <Button className={styles.passengers}>3</Button>
                <Button className={styles.passengers}>4</Button>
              </div>
            </Row>
            <div className={styles.naviButtons}>
              <Row>
                <Col>
                  <Link href="/home">
                    <Button className={styles.buttonPrevious}>{`<`}</Button>
                  </Link>
                </Col>
                <Col style={{ textAlign: "end" }}>
                  <Link href="/selectdriver">
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
