import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import CrossPlatform from "../../assets/img/Cross-platform.png";
import HPElite from "../../assets/img/Hp-Eliete.png";
import CPUBlack from "../../assets/img/cpublack.png";
import Damkar from "../../assets/img/damkar.png";
import "./content.css";

const FirstContent = () => {
  return (
    <>
      <Container id="home" className="slideshow" fluid>
        <Carousel controls={false} indicators={true} fade>
          <Carousel.Item className="carousel-item d-flex justify-content-center align-items-start">
            <Row className="row-carousel d-flex justify-content-center align-items-center">
              <Col sm={4} className="imgslide d-flex justify-content-center">
                <img src={HPElite} alt="slide" />
              </Col>
              <Col sm={4} className="caption px-3">
                <h2 className="text-uppercase fs-3">
                  Udah muter muter ujungnya ke Armada
                </h2>
                <p>
                  Armadacom adalah Toko komputer terlengkap di Wonosobo,
                  menyediakan berbagai perangkat komputer dan perangkat jaringan
                </p>
                <Col className="text-center">
                  <Button
                    className="mt-2 w-button"
                    variant="light"
                    // href="https://api.whatsapp.com/send/?phone=6282322006005&text=Hallo+Admin+Service+%2AArmada+Computer%2C%2A++&type=phone_number&app_absent=0"
                    href="#about"
                  >
                    Selengkapnya
                  </Button>
                </Col>
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item className="carousel-item d-flex justify-content-center align-items-start">
            <Row className="row-carousel d-flex justify-content-center align-items-center">
              <Col sm={4} className="imgslide d-flex justify-content-center">
                <img src={CPUBlack} alt="slide" />
              </Col>
              <Col sm={4} className="caption px-3">
                <h2 className="text-uppercase fs-3">
                  Ngapain Berhari hari Kalo Sehari Jadi
                </h2>
                <p>
                  Armadacom.id melayani service komputer, Laptop, Printer maupun
                  Jaringan dan CCTV di wonosobo dengan kualitas pelayanan
                  terbaik.
                </p>
                <Col className="text-center">
                  <Button
                    className="mt-2 w-button"
                    variant="light"
                    // href="https://api.whatsapp.com/send/?phone=6282322006005&text=Hallo+Admin+Service+%2AArmada+Computer%2C%2A++&type=phone_number&app_absent=0"
                    href="#service"
                  >
                    Selengkapnya
                  </Button>
                </Col>
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item className="carousel-item d-flex justify-content-center align-items-start">
            <Row className="row-carousel d-flex justify-content-center align-items-center">
              <Col sm={4} className="imgslide d-flex justify-content-center">
                <img src={Damkar} alt="slide" />
              </Col>
              <Col sm={4} className="caption px-3">
                <h2 className="text-uppercase fs-3">
                  Anda Sibuk? Tidak bisa ke Toko Offline?
                </h2>
                <p>
                  Selain jualan dan servis, ARMADA juga punya layanan antar
                  jemput Lo.. di DAMKARin aja, Kapan lagi bisa servis/beli tanpa
                  keluar rumah
                </p>
                <Col className="text-center">
                  <Button
                    className="mt-2 w-button"
                    variant="light"
                    // href="https://api.whatsapp.com/send/?phone=6282322006005&text=Hallo+Admin+Service+%2AArmada+Computer%2C%2A++&type=phone_number&app_absent=0"
                    href="#damkar"
                  >
                    Selengkapnya
                  </Button>
                </Col>
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item className="carousel-item d-flex justify-content-center align-items-start">
            <Row className="row-carousel d-flex justify-content-center align-items-center justify-content-md-around">
              <Col sm={4} className="imgslide d-flex justify-content-center">
                <img src={CrossPlatform} alt="slide" />
              </Col>
              <Col sm={4} className="caption px-3">
                <h2 className="text-uppercase fs-3">
                  Bikin Aplikasi Juga Bisa Tentunya
                </h2>
                <p>
                  Bikin aplikasi berbasis web ataupun Android di Wonosobo ya ke
                  Armadacom.id Sebagai penunjang aktifitas bisnis kalian
                </p>
                <Col className="text-center">
                  <Button
                    className="mt-2 w-button"
                    variant="light"
                    // href="https://api.whatsapp.com/send/?phone=6282322006005&text=Hallo+Admin+Service+%2AArmada+Computer%2C%2A++&type=phone_number&app_absent=0"
                    href="#software"
                  >
                    Selengkapnya
                  </Button>
                </Col>
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
      </Container>
    </>
  );
};

export default FirstContent;
