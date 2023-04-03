import { Col, Container, Row } from "react-bootstrap"
import imageLogoTokopedia from "../../assets/logo-tokopedia.png"
import imageLogoBukalapak from "../../assets/logo-bukalapak.png"
import imageLogoEcatalogue from "../../assets/logo-ecatalogue.png"

const OfficialStore = () => {
    return(
        <Container className="mt-5" id="official-store">
            <h1 className="text-center title-new-product">Official Store</h1>
            <center>
                <hr className="text-center break-line-tittle"/>
                <p>Kini kami telah hadir di marketplace kesayangan anda.<br/>Pantengin terus dan dapatkan promo promo menarik dari kami.</p>
            </center>
            <Row >
                <Col>
                    <center>
                        <img src={imageLogoTokopedia} alt="Logo Tokopedia" width="210px"/>
                    </center>
                </Col>
                <Col>
                    <center>
                        <img className="mt-4" src={imageLogoBukalapak} alt="Logo Bukalapak" width="210px"/>
                    </center>
                </Col>
                <Col>
                    <center>
                        <img src={imageLogoEcatalogue} alt="Logo Ecatalogue" width="210px"/>
                    </center>
                </Col>
            </Row>
        </Container>
    )
}

export default OfficialStore