import { useNavigate } from 'react-router-dom';
import { Card, Col, Container, ListGroup, Row } from "react-bootstrap"
import ctaImage1 from "../../assets/web_icon-01.png"

const SubProduk = () => {
    const navigate = useNavigate()
    return(
        <Container id="sub-produk" className="mt-5 mb-5">
            <Row>
                <Col>
                    <h1 className="text-center title-new-product">Concrete Technology</h1>
                    <center>
                        <hr className="text-center break-line-tittle"/>
                    </center>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col lg={3}>
                    <ListGroup defaultActiveKey="#link1">
                        <ListGroup.Item variant="dark">
                            <h5>Filter</h5>
                        </ListGroup.Item>
                        <ListGroup.Item className="border-bottom-0" action href="#link1">
                            Link 1
                        </ListGroup.Item>
                        <ListGroup.Item className="border-bottom-0" action>
                            Link 1
                        </ListGroup.Item>
                        <ListGroup.Item className="border-bottom-0" action>
                            Link 1
                        </ListGroup.Item>
                        <ListGroup.Item  action>
                            Link 1
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col lg={9}>
                    <Row>
                        <Col>
                            <Card onClick={() => navigate('/detail-produk')} className="align-items-center border-secondary-subtle shadow-sm me-4">
                                <Card.Img variant="top" src={ctaImage1} style={{ width: '157px' }}/>
                                <Card.Body>
                                    <Card.Title className="fw-bold title-product">ETR80H</Card.Title>
                                    <Card.Text className="desc-product">
                                        <p><b>Gasoline Tamping Rammer</b></p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lectus enim, fringilla luctus venenatis at, maximEtiam lectus enim, fringilla luctus venenatis at, maxim.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="align-items-center border-secondary-subtle shadow-sm me-4">
                                <Card.Img variant="top" src={ctaImage1} style={{ width: '157px' }}/>
                                <Card.Body>
                                    <Card.Title className="fw-bold title-product">ETR80H</Card.Title>
                                    <Card.Text className="desc-product">
                                        <p><b>Gasoline Tamping Rammer</b></p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lectus enim, fringilla luctus venenatis at, maximEtiam lectus enim, fringilla luctus venenatis at, maxim.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="align-items-center border-secondary-subtle shadow-sm me-4">
                                <Card.Img variant="top" src={ctaImage1} style={{ width: '157px' }}/>
                                <Card.Body>
                                    <Card.Title className="fw-bold title-product">ETR80H</Card.Title>
                                    <Card.Text className="desc-product">
                                        <p><b>Gasoline Tamping Rammer</b></p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lectus enim, fringilla luctus venenatis at, maximEtiam lectus enim, fringilla luctus venenatis at, maxim.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col>
                            <Card className="align-items-center border-secondary-subtle shadow-sm me-4">
                                <Card.Img variant="top" src={ctaImage1} style={{ width: '157px' }}/>
                                <Card.Body>
                                    <Card.Title className="fw-bold title-product">ETR80H</Card.Title>
                                    <Card.Text className="desc-product">
                                        <p><b>Gasoline Tamping Rammer</b></p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lectus enim, fringilla luctus venenatis at, maximEtiam lectus enim, fringilla luctus venenatis at, maxim.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="align-items-center border-secondary-subtle shadow-sm me-4">
                                <Card.Img variant="top" src={ctaImage1} style={{ width: '157px' }}/>
                                <Card.Body>
                                    <Card.Title className="fw-bold title-product">ETR80H</Card.Title>
                                    <Card.Text className="desc-product">
                                        <p><b>Gasoline Tamping Rammer</b></p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lectus enim, fringilla luctus venenatis at, maximEtiam lectus enim, fringilla luctus venenatis at, maxim.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="align-items-center border-secondary-subtle shadow-sm me-4">
                                <Card.Img variant="top" src={ctaImage1} style={{ width: '157px' }}/>
                                <Card.Body>
                                    <Card.Title className="fw-bold title-product">ETR80H</Card.Title>
                                    <Card.Text className="desc-product">
                                        <p><b>Gasoline Tamping Rammer</b></p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lectus enim, fringilla luctus venenatis at, maximEtiam lectus enim, fringilla luctus venenatis at, maxim.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default SubProduk