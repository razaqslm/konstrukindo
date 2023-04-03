import { Col, Container, Pagination, Row } from "react-bootstrap"
import imageDummy from "../../assets/dummy-img.png"

const LatesNews = () => {
    return(
        <Container className="mt-5" id="news">
            <h1 className="text-center title-new-product">Lates News</h1>
            <center>
                <hr className="text-center break-line-tittle"/>
            </center>
            <Row>
                <Col>
                    <div className="card mb-3">
                        <div className="row g-0 shadow p-1">
                            <div className="col-md-9">
                                <div className="card-body">
                                    <h5 className="card-title fw-bold title-news">New Product High Frequency Inverter ENAR Boxel</h5>
                                    <p className="card-text"><small className="text-muted">13 September 2017</small></p>
                                    <p className="card-text">Pada tahun ini PT. Andalan Dinamika Konstrukindo ikut serta dalam sebuah pameran bertajuk "Concrete Show South East Asia" yang diselenggarakan oleh PT. UBM Pameran Niaga Indonesia, bertempat di Jakarta International Expo Kemayoran pada 13 hingga 16 September 2017. Selama Pameran berlangsung, PT. Andalan Dinamika Konstrukindo menampilkan sejumlah alat atau mesin konstruksi berskala kecil hingga sedang seperti, Light Tower, Ride-On Roller, Concrete Cutter, Mini Excavator, Vibratory Roller</p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <img src={imageDummy} className="rounded-start" height="313px" alt="News" />
                                {/* <svg className="bd-placeholder-img img-fluid rounded-end" width="100%" height="320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image</text></svg> */}
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="card mb-3">
                        <div className="row g-0 shadow p-1">
                            <div className="col-md-9">
                                <div className="card-body">
                                    <h5 className="card-title fw-bold title-news">New Product High Frequency Inverter ENAR Boxel</h5>
                                    <p className="card-text"><small className="text-muted">13 September 2017</small></p>
                                    <p className="card-text">Pada tahun ini PT. Andalan Dinamika Konstrukindo ikut serta dalam sebuah pameran bertajuk "Concrete Show South East Asia" yang diselenggarakan oleh PT. UBM Pameran Niaga Indonesia, bertempat di Jakarta International Expo Kemayoran pada 13 hingga 16 September 2017. Selama Pameran berlangsung, PT. Andalan Dinamika Konstrukindo menampilkan sejumlah alat atau mesin konstruksi berskala kecil hingga sedang seperti, Light Tower, Ride-On Roller, Concrete Cutter, Mini Excavator, Vibratory Roller</p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <img src={imageDummy} className="rounded-start" height="313px" alt="News" />
                                {/* <svg className="bd-placeholder-img img-fluid rounded-end" width="100%" height="320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image</text></svg> */}
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="card mb-3">
                        <div className="row g-0 shadow p-1">
                            <div className="col-md-9">
                                <div className="card-body">
                                    <h5 className="card-title fw-bold title-news">New Product High Frequency Inverter ENAR Boxel</h5>
                                    <p className="card-text"><small className="text-muted">13 September 2017</small></p>
                                    <p className="card-text">Pada tahun ini PT. Andalan Dinamika Konstrukindo ikut serta dalam sebuah pameran bertajuk "Concrete Show South East Asia" yang diselenggarakan oleh PT. UBM Pameran Niaga Indonesia, bertempat di Jakarta International Expo Kemayoran pada 13 hingga 16 September 2017. Selama Pameran berlangsung, PT. Andalan Dinamika Konstrukindo menampilkan sejumlah alat atau mesin konstruksi berskala kecil hingga sedang seperti, Light Tower, Ride-On Roller, Concrete Cutter, Mini Excavator, Vibratory Roller</p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <img src={imageDummy} className="rounded-start" height="313px" alt="News" />
                                {/* <svg className="bd-placeholder-img img-fluid rounded-end" width="100%" height="320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image</text></svg> */}
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-center align-self-center">
                    <Pagination>
                        <Pagination.First />
                        <Pagination.Prev />
                        <Pagination.Item>{1}</Pagination.Item>
                        <Pagination.Ellipsis />

                        <Pagination.Item>{10}</Pagination.Item>
                        <Pagination.Item>{11}</Pagination.Item>
                        <Pagination.Item active>{12}</Pagination.Item>
                        <Pagination.Item>{13}</Pagination.Item>
                        <Pagination.Item disabled>{14}</Pagination.Item>

                        <Pagination.Ellipsis />
                        <Pagination.Item>{20}</Pagination.Item>
                        <Pagination.Next />
                        <Pagination.Last />
                    </Pagination>
                </Col>
            </Row>
        </Container>
    )
}

export default LatesNews