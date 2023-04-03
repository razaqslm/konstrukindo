import { Col, Container, Image, Row } from "react-bootstrap"
import imageLogo from "../../assets/adk_logo.png"
import iconWhatshappWhite from "../../assets/icon/icon-whatshapp-white.png"
import iconMailWhite from "../../assets/icon/icon-mail-white.png"
import iconFacobookWhite from "../../assets/icon/icon-facebook-white.png"
import iconInstagramWhite from "../../assets/icon/icon-instagram-white.png"
import iconYoutubeWhite from "../../assets/icon/icon-youtube-white.png"
import iconLocationWhite from "../../assets/icon/icon-location-white.png"
import iconPhoneWhite from "../../assets/icon/icon-phone-white.png"
import iconTaxWhite from "../../assets/icon/icon-tax-white.png"

const Footer = () => {
    return(
        <>
            <Container className="mt-5" id="footer">
                <Row>
                    <Col>
                        <Image src={imageLogo} height="100px"/>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col>
                        <h5 className="fw-bold font-color">Hubungi Kami</h5>
                        <Row>
                            <Col lg={2}>
                                <div className="cover-icon float-start">
                                    <img src={iconWhatshappWhite} height="20px" alt="Icon Mail" />
                                </div>
                            </Col>
                            <Col lg={10} className="d-flex align-items-center ps-0">
                                <span>0811 1616 181</span>
                            </Col>
                        </Row>
                        <Row className="mt-2">
                            <Col lg={2}>
                                <div className="cover-icon float-start">
                                    <img src={iconMailWhite} height="14px" alt="Icon Mail" />
                                </div>
                            </Col>
                            <Col lg={10} className="d-flex align-items-center ps-0">
                                <span>sales@konstrukindo.co.id</span>
                            </Col>
                        </Row>
                        <h5 className="mt-4 fw-bold font-color">Ikuti Kami</h5>
                        <ul className="list-group">
                        <div className="d-grid gap-2 d-md-block">
                            <div className="cover-icon float-start me-1">
                                <img src={iconFacobookWhite} height="17px" alt="Icon Mail" />
                            </div>
                            <div className="cover-icon float-start me-1">
                                <img src={iconInstagramWhite} height="16px" alt="Icon Mail" />
                            </div>
                            <div className="cover-icon float-start me-1">
                                <img src={iconYoutubeWhite} height="16px" alt="Icon Mail" />
                            </div>
                        </div>
                        </ul>
                    </Col>
                    <Col>
                        <h5 className="fw-bold font-color">Jakarta</h5>
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
                        <h5 className="fw-bold font-color">Surabaya</h5>
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
                        <h5 className="fw-bold font-color">Balikpapan</h5>
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
            </Container>
            <Container fluid className="mt-5 bg-footer">
                <Row>
                    <Col>
                        <center className="mt-3"><p>© Copyright PT Andalan Dinamika Konstrukindo 2022. All Rights Reserved.</p></center>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Footer