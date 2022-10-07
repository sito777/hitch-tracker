import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import styles from "../styles/trip.module.css";
import Link from "next/link";

export default function Oldtrips() {
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
                <h1>Old trips</h1>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col
                style={{ background: "grey" }}
                xs={10}
                className={`${styles.oldTripCard} `}
              >
                <div class={styles.oldTripCardText}>
                  <p>
                    <b>Spain</b>
                  </p>
                  <p>hasta la vista 22</p>
                </div>
              </Col>
              <Col
                style={{ background: "grey" }}
                xs={10}
                className={`${styles.oldTripCard} `}
              >
                <div class={styles.oldTripCardText}>
                  <p>
                    <b>Spain</b>
                  </p>
                  <p>hasta la vista 22</p>
                </div>
              </Col>
              <Col
                style={{ background: "grey" }}
                xs={10}
                className={`${styles.oldTripCard} `}
              >
                <div class={styles.oldTripCardText}>
                  <p>
                    <b>Spain</b>
                  </p>
                  <p>hasta la vista 22</p>
                </div>
              </Col>
              <Col
                style={{ background: "grey" }}
                xs={10}
                className={`${styles.oldTripCard} `}
              >
                <div class={styles.oldTripCardText}>
                  <p>
                    <b>Spain</b>
                  </p>
                  <p>hasta la vista 22</p>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}
