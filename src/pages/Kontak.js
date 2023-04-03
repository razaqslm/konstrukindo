import { Col, Container, Row } from "react-bootstrap"
import Cta2 from "../components/Home/Cta2"
import Footer from "../components/Home/Footer"
import NavigationBar from "../components/Home/NavigationBar"
import imageDummy from "../assets/dummy-img.png"
import iconLocationWhite from "../assets/icon/icon-location-white.png"
import iconPhoneWhite from "../assets/icon/icon-phone-white.png"
import iconTaxWhite from "../assets/icon/icon-tax-white.png"

const Kontak = () => {
    return(
        <>
            <NavigationBar/>
            <Container className="mt-5 mb-5" id="kontak">
                <Row>
                    <Col>
                        <h1 className="text-center title-new-product">Kontak</h1>
                        <center>
                            <hr className="text-center break-line-tittle"/>
                        </center>
                        <div className="kontak-maps">
                            <img src={imageDummy} alt="Maps" className="w-100" height="450px" />
                        </div>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col>
                        <h1 className="title-new-product">Jakarta</h1>
                        <hr className="break-line-tittle"/>
                        <Row>
                            <Col lg={2}>
                                <div className="cover-icon float-start">
                                    <img src={iconLocationWhite} height="14px" alt="Icon Mail" />
                                </div>
                            </Col>
                            <Col lg={10} className="ps-0">
                                <span>Taman Meruya Plaza Blok C/5,Meruya Utara, Kembangan,Jakarta Barat, 11620</span>
                            </Col>
                        </Row>
                        <Row className="mt-2">
                            <Col lg={2}>
                                <div className="cover-icon float-start">
                                    <img src={iconPhoneWhite} height="14px" alt="Icon Mail" />
                                </div>
                            </Col>
                            <Col lg={10} className="d-flex align-items-center ps-0">
                                <span>(021) 5890 9733</span>
                            </Col>
                        </Row>
                        <Row className="mt-2">
                            <Col lg={2}>
                                <div className="cover-icon float-start">
                                    <img src={iconTaxWhite} height="14px" alt="Icon Mail" />
                                </div>
                            </Col>
                            <Col lg={10} className="d-flex align-items-center ps-0">
                                <span>(021) 5890 6087</span>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <h1 className="title-new-product">Surabaya</h1>
                        <hr className="break-line-tittle"/>
                        <Row>
                            <Col lg={2}>
                                <div className="cover-icon float-start">
                                    <img src={iconLocationWhite} height="14px" alt="Icon Mail" />
                                </div>
                            </Col>
                            <Col lg={10} className="ps-0">
                                <span>Jl. Pacarkembang II No. 118 Pacarkembang, Tambaksari Surabaya, Jawa Timur, 60132</span>
                            </Col>
                        </Row>
                        <Row className="mt-2">
                            <Col lg={2}>
                                <div className="cover-icon float-start">
                                    <img src={iconPhoneWhite} height="14px" alt="Icon Mail" />
                                </div>
                            </Col>
                            <Col lg={10} className="d-flex align-items-center ps-0">
                                <span>(031) 9992 1858</span>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <h1 className="title-new-product">Balikpapan</h1>
                        <hr className="break-line-tittle"/>
                        <Row>
                            <Col lg={2}>
                                <div className="cover-icon float-start">
                                    <img src={iconLocationWhite} height="14px" alt="Icon Mail" />
                                </div>
                            </Col>
                            <Col lg={10} className="ps-0">
                                <span>Komplek Pergudangan Bizhub 52 Blok F-03, Kariangau, Balikpapan Kalimantan Timur, 76129</span>
                            </Col>
                        </Row>
                        <Row className="mt-2">
                            <Col lg={2}>
                                <div className="cover-icon float-start">
                                    <img src={iconPhoneWhite} height="14px" alt="Icon Mail" />
                                </div>
                            </Col>
                            <Col lg={10} className="d-flex align-items-center ps-0">
                                <span>(0542) 8536 299</span>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <hr />
            </Container>
            <Cta2/>
            <Footer/>
        </>
    )
}

export default Kontak