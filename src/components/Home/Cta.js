import { Card, Col, Container, Row } from "react-bootstrap"
import ctaImage1 from "../../assets/web_icon-01.png"
import ctaImage2 from "../../assets/web_icon-02.png"
import ctaImage3 from "../../assets/web_icon-03.png"
import ctaImage4 from "../../assets/web_icon-04.png"

const Cta = () => {
    return(
        <Container id="cta">
            <hr/>
            <Row>
                <Col>
                    <Card className="align-items-center border-0">
                        <Card.Img variant="top" src={ctaImage1} style={{ width: '157px' }}/>
                        <Card.Body className="text-center">
                            <Card.Title className="fw-bold">Jasa Pengiriman</Card.Title>
                            <Card.Text>
                                Kami menyediakan jasa pengiriman dengan jangkauan nasional.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="align-items-center border-0">
                        <Card.Img variant="top" src={ctaImage2} style={{ width: '157px' }}/>
                        <Card.Body className="text-center">
                            <Card.Title className="fw-bold">Fast Respond</Card.Title>
                            <Card.Text>
                                Sales kami siap membantu untuk pengadaan barang ataupun penawaran harga.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="align-items-center border-0">
                        <Card.Img variant="top" src={ctaImage3} style={{ width: '157px' }}/>
                        <Card.Body className="text-center">
                            <Card.Title className="fw-bold">Harga Bersaing</Card.Title>
                            <Card.Text>
                                Kami siap membantu andadalam memberikan harga terbaik.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="align-items-center border-0">
                        <Card.Img variant="top" src={ctaImage4} style={{ width: '157px' }}/>
                        <Card.Body className="text-center">
                            <Card.Title className="fw-bold">Garansi Servis</Card.Title>
                            <Card.Text>
                                Untuk memastikan kualitas barang, kami memberikan garansi servis selama 1 tahun.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <hr/>
        </Container>
    )
}

export default Cta