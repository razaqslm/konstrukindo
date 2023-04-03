import { Card, Col, Container, Row } from "react-bootstrap"
import imageDummy from "../../assets/dummy-img.png"
import { useNavigate } from 'react-router-dom';

const BreakingNews = () => {
    const navigate = useNavigate()
    return(
        <Container className="mt-5">
            <Row>
                <Col>
                    <h1 className="text-center title-new-product">News</h1>
                    <center>
                        <hr className="text-center break-line-tittle"/>
                    </center>
                    <Card onClick={() => navigate('/detail-news')} className="w-100 shadow border-0 mt-5">
                        <Card.Img variant="top" height="400px" className="cstm-card" src={imageDummy} />
                        <Card.Body>
                            <Card.Title className="ms-1 fw-bold title-news mb-3">New Product High Frequency Inverter ENAR Boxel</Card.Title>
                            <Card.Text className="ms-1 mb-3">
                                <p className="card-text">Pada tahun ini PT. Andalan Dinamika Konstrukindo ikut serta dalam sebuah pameran bertajuk "Concrete Show South East Asia" yang diselenggarakan oleh PT. UBM Pameran Niaga Indonesia, bertempat di Jakarta International Expo Kemayoran pada 13 hingga 16 September 2017. Selama Pameran berlangsung, PT. Andalan Dinamika Konstrukindo menampilkan sejumlah alat atau mesin konstruksi berskala kecil hingga sedang seperti, Light Tower, Ride-On Roller, Concrete Cutter, Mini Excavator, Vibratory Roller</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default BreakingNews