import Head from "next/head";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import { Button, Col, Row } from "react-bootstrap";
import styles from "../styles/trip.module.css";
import Link from "next/link";

export default function SelectDriver() {
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
                <h1>Select a driver</h1>
              </Col>
            </Row>
            <Row className={styles.sectie}>
              <Col xs={3}></Col>
              <Col xs={3} className={styles.headerTableText}>
                <p>Language</p>
              </Col>
              <Col xs={3} className={styles.headerTableText}>
                <p>Portage</p>
              </Col>
              <Col xs={3} className={styles.headerTableText}>
                <p>Price</p>
              </Col>
            </Row>
            <Row>
              <Col xs={3}>
                <Link href="/driverinfo">
                  <Image
                    src="/img/hunter-newton-BgZFS8DPg0I-unsplash.jpeg"
                    alt="Img of a ncie taxi"
                    className={styles.img}
                    height={200}
                    width={200}
                  />
                </Link>
              </Col>
              <Col xs={3} className={styles.TableText}>
                <p>English</p>
              </Col>
              <Col xs={3} className={styles.TableText}>
                <p>20kg</p>
              </Col>
              <Col xs={3} className={styles.TableText}>
                <p>25,-</p>
              </Col>
            </Row>
            <Row>
              <Col xs={3}>
                <Link href="/driverinfo">
                  <Image
                    src="/img/hunter-newton-BgZFS8DPg0I-unsplash.jpeg"
                    alt="Img of a ncie taxi"
                    className={styles.img}
                    height={200}
                    width={200}
                  />
                </Link>
              </Col>

              <Col xs={3} className={styles.TableText}>
                <p>English</p>
              </Col>
              <Col xs={3} className={styles.TableText}>
                <p>23kg</p>
              </Col>
              <Col xs={3} className={styles.TableText}>
                <p>29,31,-</p>
              </Col>
            </Row>
            <Row>
              <Col xs={3}>
                <Link href="/driverinfo">
                  <Image
                    src="/img/hunter-newton-BgZFS8DPg0I-unsplash.jpeg"
                    alt="Img of a ncie taxi"
                    className={styles.img}
                    height={200}
                    width={200}
                  />
                </Link>
              </Col>
              <Col xs={3} className={styles.TableText}>
                <p>English</p>
              </Col>
              <Col xs={3} className={styles.TableText}>
                <p>20kg</p>
              </Col>
              <Col xs={3} className={styles.TableText}>
                <p>45,-</p>
              </Col>
            </Row>
            <Row>
              <Col xs={3}>
                <Link href="/driverinfo">
                  <Image
                    src="/img/hunter-newton-BgZFS8DPg0I-unsplash.jpeg"
                    alt="Img of a ncie taxi"
                    className={styles.img}
                    height={200}
                    width={200}
                  />
                </Link>
              </Col>
              <Col xs={3} className={styles.TableText}>
                <p>English</p>
              </Col>
              <Col xs={3} className={styles.TableText}>
                <p>20kg</p>
              </Col>
              <Col xs={3} className={styles.TableText}>
                <p>25,-</p>
              </Col>
            </Row>
            <Row>
              <Col xs={3}>
                <Link href="/driverinfo">
                  <Image
                    src="/img/hunter-newton-BgZFS8DPg0I-unsplash.jpeg"
                    alt="Img of a ncie taxi"
                    className={styles.img}
                    height={200}
                    width={200}
                  />
                </Link>
              </Col>
              <Col xs={3} className={styles.TableText}>
                <p>English</p>
              </Col>
              <Col xs={3} className={styles.TableText}>
                <p>33kg</p>
              </Col>
              <Col xs={3} className={styles.TableText}>
                <p>26,45,-</p>
              </Col>
            </Row>
            <Row>
              <Col xs={3}>
                <Link href="/driverinfo">
                  <Image
                    src="/img/hunter-newton-BgZFS8DPg0I-unsplash.jpeg"
                    alt="Img of a ncie taxi"
                    className={styles.img}
                    height={200}
                    width={200}
                  />
                </Link>
              </Col>
              <Col xs={3} className={styles.TableText}>
                <p>English</p>
              </Col>
              <Col xs={3} className={styles.TableText}>
                <p>10kg</p>
              </Col>
              <Col xs={3} className={styles.TableText}>
                <p>35,-</p>
              </Col>
            </Row>
            <div className={styles.naviButtonsTwo}>
              <Row>
                <Col>
                  <Link href="/plantrip">
                    <Button className={styles.buttonPrevious}>{`<`}</Button>
                  </Link>
                </Col>
                <Col style={{ textAlign: "end" }}>
                  <Link href="/driverinfo">
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
