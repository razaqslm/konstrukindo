import { useNavigate } from 'react-router-dom';
import { Alert, Button, Card, Col, Container, Row } from "react-bootstrap"
import Footer from "../components/Home/Footer"
import NavigationBar from "../components/Home/NavigationBar"
import imageDummy from "../assets/dummy-img.png"
import iconTandaSeru from "../assets/icon/icon-tanda-seru.png"
import iconUserBlue from "../assets/icon/icon-user-blue.png"

const Karir = () => {
    const navigate = useNavigate()
    return(
        <>
            <NavigationBar/>
            <Container id="karir" className="mt-5 mb-5">
                <Row>
                    <Col>
                        <h1 className="text-center title-new-product">Karir</h1>
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
                        <h1 className="text-center title-new-product">Bergabung Bersama Kami</h1>
                        <center>
                            <hr className="text-center break-line-tittle"/>
                            <p>Mulai berkarir dan temukan tujuanmu bersama Kami.</p>
                        </center>
                        <Alert variant="primary" className="text-light bg-primary mt-5">
                            <Row>
                                <Col lg={2} className="d-flex align-items-center justify-content-end">
                                    <img src={iconTandaSeru} height="56px" alt="Tanda Seru" />
                                </Col>
                                <Col lg={10} className="pt-1">
                                    <Alert.Heading>PERHATIAN!</Alert.Heading>
                                    <p>
                                        Kami tidak pernah memungut biaya apapun selama proses pendaftaran dan seleksi karir berlangsung.
                                    </p>
                                </Col>
                            </Row>
                        </Alert>
                        <Card className="shadow mt-5">
                            <Card.Body>
                                <Row>
                                    <Col className="ps-5">
                                        <h1>Sales Engineer</h1>
                                        <p>Pacarkembang, Surabaya</p>
                                    </Col>
                                    <Col className="d-flex align-items-center justify-content-center">
                                        <img src={iconUserBlue} alt="User" height="31px" />
                                        <p className="mb-0 p-1">Fresh Graduate</p>
                                    </Col>
                                    <Col className="d-flex align-items-center justify-content-center">
                                        <Button onClick={() => navigate('/detail-karir')} variant="primary" size="lg">Lihat Detail</Button>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                        <Card className="shadow mt-4">
                            <Card.Body>
                                <Row>
                                    <Col className="ps-5">
                                        <h1>Sales Engineer</h1>
                                        <p>Pacarkembang, Surabaya</p>
                                    </Col>
                                    <Col className="d-flex align-items-center justify-content-center">
                                        <img src={iconUserBlue} alt="User" height="31px" />
                                        <p className="mb-0 p-1">Fresh Graduate</p>
                                    </Col>
                                    <Col className="d-flex align-items-center justify-content-center">
                                        <Button variant="primary" size="lg">Lihat Detail</Button>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <hr/>
            </Container>
            <Footer/>
        </>
    )
}

export default Karir