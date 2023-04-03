import { Col, Container, Row } from "react-bootstrap"
import imageBannerTentangKami from '../../assets/banner-tentang-kami.png'

const Header = () => {
    return(
        <Container fluid className="mt-5">
            <Row>
                <Col className="d-flex justify-content-center">
                    <img src={imageBannerTentangKami} height="496px" alt="Header"  />
                </Col>
            </Row>
        </Container>
    )
}

export default Header