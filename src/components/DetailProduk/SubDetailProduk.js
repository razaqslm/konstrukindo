import { Button, Card, Col, Container, Row, Table } from "react-bootstrap"
import imageDummy from "../../assets/dummy-img.png"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
};

const SubDetailProduk = () => {
    return(
        <Container id="sub-detail-produk" className="mt-5">
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
                    <div className="main-photo">
                        <img src={imageDummy} className="w-100" alt="Produk"/>
                    </div>
                    <Carousel responsive={responsive} autoPlay autoPlaySpeed={5000} infinite className="mt-3 mb-2">
                        <Card className="align-items-center border-secondary-subtle shadow-sm me-4">
                            <Card.Img variant="top" src={imageDummy} style={{ width: '60px' }}/>
                        </Card>
                        <Card className="align-items-center border-secondary-subtle shadow-sm me-4">
                            <Card.Img variant="top" src={imageDummy} style={{ width: '60px' }}/>
                        </Card>
                        <Card className="align-items-center border-secondary-subtle shadow-sm me-4">
                            <Card.Img variant="top" src={imageDummy} style={{ width: '60px' }}/>
                        </Card>
                        <Card className="align-items-center border-secondary-subtle shadow-sm me-4">
                            <Card.Img variant="top" src={imageDummy} style={{ width: '60px' }}/>
                        </Card>
                        <Card className="align-items-center border-secondary-subtle shadow-sm me-4">
                            <Card.Img variant="top" src={imageDummy} style={{ width: '60px' }}/>
                        </Card>
                    </Carousel>
                    <p><i>*Gambar dan spesifikasi dapat berubah tanpa pemberitahuan</i></p>
                    <div className="d-grid gap-2 mt-2">
                        <Button variant="outline-primary">Download Brosur</Button>
                        <Button variant="outline-primary">Download Manual Book</Button>
                    </div>
                    
                </Col>
                <Col lg={9}>
                    <div className="text-desc">
                        <h3 className="font-color">Steel Bar Bender - GW50C-4</h3>
                        <h2 className="fw-bold">Rp. 56.210.000</h2>
                        <p><i>Chat kami untuk mendapatkan harga terbaik.</i></p>
                        <div className="d-grid gap-2 d-md-block">
                            <Button variant="primary" className="me-2">Chat Kami</Button>
                            <Button variant="outline-primary">Buat Penawaran</Button>
                        </div>
                    </div>
                    <div className="features mt-5">
                        <h6 className="font-color fw-bold">Features</h6>
                        <hr className="mt-0 break-line-tittle" style={{width: '89px'}} />
                        <p>Steel Bar Bender GW50C-4, menggunakan reduction gearsystem. Dapat melengkungkan bar dengan desain yang berbeda. Biasa digunakan untuk konstruksi gedung, jembatan dan jalan layang. GW50C-4 dilengkapi dengan beberapa fitur seperti, Gear Box yang tertutup dan dipisahkan dari working disk agar tidak terjadi distorsi bahkan pada kondisi heavy loads, tidak ada kebocoran oli ketika mesin dipindahkan. Gears, Gear Shafts, Working Disk, Stop Gauge, Saddles, Pile Heads And Pile Head Bushes terbuat dari paduan baja dengan proses heat treatment. Brake Motor anti debu dan dua Limit-Switch untuk memastikan keakuratan bending. Menggunakan insert-pin type disk dan movable saddles. GW50C-4 telah mendapat sertifikasi CE Certification (2006/42/EC - 2006/95/EC).</p>
                    </div>
                    <div className="specification mt-5">
                        <h6 className="font-color fw-bold">Specification</h6>
                        <hr className="mt-0 break-line-tittle" style={{width: '125px'}} />
                        <Table width="500px">
                            <thead>
                                <tr>
                                    <th>Type</th>
                                    <th>GW50C-4</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Max. Bending</td>
                                    <td>40 mm</td>
                                </tr>
                                <tr>
                                    <td>Motor Specification</td>
                                    <td>380 V, 4.0 kW-4P</td>
                                </tr>
                                <tr>
                                    <td>Motor Speed</td>
                                    <td>1440 rpm</td>
                                </tr>
                                <tr>
                                    <td>Bending Control Way</td>
                                    <td>Manual</td>
                                </tr>
                                <tr>
                                    <td>Working Disk Speed</td>
                                    <td>9 rpm</td>
                                </tr>
                                <tr>
                                    <td>Gear Box Oil Volume</td>
                                    <td>20 Liters</td>
                                </tr>
                                <tr>
                                    <td>Noise</td>
                                    <td>80dB (A)</td>
                                </tr>
                                <tr>
                                    <td>Weight</td>
                                    <td>476 kg</td>
                                </tr>
                                <tr>
                                    <td>Dimension</td>
                                    <td>1000 X 800 X 900 mm</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                    <div className="certification mt-5 mb-5">
                        <h6 className="font-color fw-bold">Certification</h6>
                        <hr className="mt-0 break-line-tittle" style={{width: '89px'}} />
                        <p>CE Certification (2006/42/EC - 2006/95/EC).</p>
                    </div>
                    <hr/>
                </Col>
            </Row>
        </Container>
    )
}

export default SubDetailProduk