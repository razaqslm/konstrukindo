import { Button, Col, Container, Row } from "react-bootstrap"
import imageBannerWhatshap from "../../assets/whatsapp-banner.png"
import iconWhatshappBlue from "../../assets/icon/icon-whatshaap-blue.png"

const Cta2 = () => {
    return(
        <Container fluid className="mt-5 bg-color" id="cta2">
            <Row className="align-items-center">
                <Col>
                    <img className="d-block w-100" src={imageBannerWhatshap} alt="Banner Whatsapp" width="100%"/>
                </Col>
                <Col>
                    <Container >
                        <h1 className="fw-bolder">Mau Tanya Stok <br/>atau Detail Barang</h1>
                        <hr className="text-center break-line-tittle"/>
                        <p>Silahkan ajukan pertanyaan melalui Whatsapp pada <br/> layanan pelanggan kami di jam operasional.<br/> Senin - Jumat pukul 09.00 - 17.00.</p>
                        <Button className="btn-light fw-bolder mt-5 btn-cta">
                            <img className="me-3" src={iconWhatshappBlue} height="35px" alt="Icon Whatshapp" />
                            <span className="font-color">0811 1616 181</span>
                        </Button>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}

export default Cta2