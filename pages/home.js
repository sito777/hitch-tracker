import { Col, Row } from "react-bootstrap";
import styles from "../styles/home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Row className="justify-content-center">
        <Col md={5}>
          <Row>
            <Col className={styles.headerBox} style={{ background: "#1669CC" }}>
              <h1>Home</h1>
            </Col>
          </Row>
          <Row>
            <Col className={styles.sectie}>
              <Row className="justify-content-center">
                <Link href="plantrip">
                  <Col
                    style={{ background: "#1669CC" }}
                    xs={4}
                    className={`${styles.imgTable}`}
                  >
                    <p className={styles.imgTableText}>Plan a trip</p>
                  </Col>
                </Link>
                <Link href="oldtrips">
                  <Col
                    style={{ background: "#1669CC" }}
                    xs={4}
                    className={`${styles.imgTable} offset-sm-2`}
                  >
                    <p className={styles.imgTableText}>Look old trips</p>
                  </Col>
                </Link>
              </Row>
              <Row className="justify-content-center">
                <Link href="profile">
                  <Col
                    style={{ background: "#1669CC" }}
                    xs={4}
                    className={`${styles.imgTable}`}
                  >
                    <p className={styles.imgTableText}>Profile</p>
                  </Col>
                </Link>
                <Link href="recommended">
                  <Col
                    style={{ background: "#1669CC" }}
                    xs={4}
                    className={`${styles.imgTable} offset-sm-2`}
                  >
                    <p className={styles.imgTableText}>Recommended</p>
                  </Col>
                </Link>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}
