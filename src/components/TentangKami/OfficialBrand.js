import { Col, Container, Row } from "react-bootstrap"
import imageOfficialBrand1 from '../../assets/official-brands-1.png'
import imageOfficialBrand2 from '../../assets/official-brands-2.png'
import imageOfficialBrand3 from '../../assets/official-brands-3.png'
import imageOfficialBrand4 from '../../assets/official-brands-4.png'
import imageOfficialBrand5 from '../../assets/official-brands-5.png'

const OfficialBrand = () => {
    return(
        <Container id="official-brand" className="mt-5">
            <Row>
                <Col>
                    <h1 className="text-center title-new-product">Official Brand</h1>
                    <center>
                        <hr className="text-center break-line-tittle"/>
                        <p>Kami menjalin kerja sama dengan beberapa manufaktur brand di berbagai negara, <br/>dengan harapan dapat memberikan berbagai produk bervariasi dan sesuai dengan kebutuhan pasar.</p>
                    </center>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col className="d-flex align-items-center justify-content-center">
                    <img src={imageOfficialBrand1} height="167px" alt="Official Brand"/>
                </Col>
                <Col className="d-flex align-items-center justify-content-center">
                    <img src={imageOfficialBrand2} height="120px" alt="Official Brand"/>
                </Col>
                <Col className="d-flex align-items-center justify-content-center">
                    <img src={imageOfficialBrand3} height="105px" alt="Official Brand"/>
                </Col>
                <Col className="d-flex align-items-center justify-content-center">
                    <img src={imageOfficialBrand4} height="167px" alt="Official Brand"/>
                </Col>
                <Col className="d-flex align-items-center justify-content-center">
                    <img src={imageOfficialBrand5} height="69px" alt="Official Brand"/>
                </Col>
            </Row>
            <hr className="mb-5 mt-5"/>
        </Container>
    )
}

export default OfficialBrand