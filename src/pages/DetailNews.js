import { Col, Container, Row } from "react-bootstrap"
import Footer from "../components/Home/Footer"
import NavigationBar from "../components/Home/NavigationBar"
import imageDummy from "../assets/dummy-img.png"

const DetailNews = () => {
    return(
        <>
            <NavigationBar/> 
            <Container id="detail-news" className="mt-5">
                <Row>
                    <Col>
                        <img src={imageDummy} alt="Header" height="450px" className="w-100" />
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col lg={8}>
                        <div className="header-news">
                            <h1 className="title-new-product">New Product High Frequency <br/>Inverter ENAR Boxel</h1>
                            <hr className="break-line-tittle"/>
                            <p className="mb-0"><b>Andalan Dinamika Konstrukindo</b></p>
                            <p className="mb-0">Senin, 18 Maret 2019</p>
                        </div>
                        <div className="desc-news mt-5">
                            <p>ENAR - High frequency electronic converter for concrete vibrator The electronic control of the frequency guarantees maximum performance from the vibrator Performance of the converter is optimized by indirect cooling Water-resistant and damp proof Safe ultilization voltage of - 42V Galvanic insulation by means of transformer Shock resistant robust housing Comes with 5 m of standard electric cable Converter and pokers protected against; High current, High voltage, Low voltage.</p>
                            <p>Dengan ditambahnya Lineup Produk dari ENAR Concrete Vibrator dengan ini kami mempersembahkan kepada customer setia kami. ENAR High Frequency Electronic Converter atau yang lebih dikenal dengan " Inverter " dengan Varian Terbaru BOXEL 215, Inverter ini memiliki Fitur, Tahan Air, dan Tahan terhadap Benturan, dilengkapi juga dengan teknologi Overvoltage Protection, yang menjaga kestabilan voltase pada saat idle, beroperasi dengan 1 maupun 2 Internal Vibrator Sekaligus.</p>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <Row>
                            <Col>
                                <div className="img-news-recommend">
                                    <img src={imageDummy} alt="Recoomend News" height="364px" className="w-100" />
                                </div>
                                <div className="desc-news-recommend">
                                    <h4 className="fw-bold mt-2">Ini Judul 1</h4>
                                    <p className="mb-0"><b>Andalan Dinamika Konstrukindo</b></p>
                                    <p className="mb-0">Senin, 18 Maret 2019</p>
                                </div>
                            </Col>
                            <hr className="mt-3"/>
                        </Row>
                        <Row>
                            <Col>
                                <div className="img-news-recommend">
                                    <img src={imageDummy} alt="Recoomend News" height="364px" className="w-100" />
                                </div>
                                <div className="desc-news-recommend">
                                    <h4 className="fw-bold mt-2">Ini Judul 2</h4>
                                    <p className="mb-0"><b>Andalan Dinamika Konstrukindo</b></p>
                                    <p className="mb-0">Senin, 18 Maret 2019</p>
                                </div>
                            </Col>
                            <hr className="mt-3"/>
                        </Row>
                        <Row>
                            <Col>
                                <div className="img-news-recommend">
                                    <img src={imageDummy} alt="Recoomend News" height="364px" className="w-100" />
                                </div>
                                <div className="desc-news-recommend">
                                    <h4 className="fw-bold mt-2">Ini Judul 3</h4>
                                    <p className="mb-0"><b>Andalan Dinamika Konstrukindo</b></p>
                                    <p className="mb-0">Senin, 18 Maret 2019</p>
                                </div>
                            </Col>
                            <hr className="mt-3"/>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </>
    )
}

export default DetailNews