import { Alert, Button, Card, Col, Container, Row } from "react-bootstrap"
import Footer from "../components/Home/Footer"
import NavigationBar from "../components/Home/NavigationBar"
import imageDummy from "../assets/dummy-img.png"
import iconTandaSeru from "../assets/icon/icon-tanda-seru.png"

const DetailKarir = () => {
    return(
        <>
            <NavigationBar/>
            <Container id="karir" className="mt-5 mb-5">
                <Row>
                    <Col>
                        <div className="kontak-maps">
                            <img src={imageDummy} alt="Maps" className="w-100" height="450px" />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Alert variant="primary" className="text-light bg-primary mt-3">
                            <Row>
                                <Col lg={2} className="d-flex align-items-center justify-content-end">
                                    <img src={iconTandaSeru} height="56px" alt="Tanda Seru" />
                                </Col>
                                <Col lg={10} className="pt-1">
                                    <Alert.Heading>PERHATIAN!</Alert.Heading>
                                    <p>
                                        Kami tidak pernah memungut biaya apapun selama proses pendaftaran dan seleksi karir berlangsung.
                                    </p>
                                </Col>
                            </Row>
                        </Alert>
                    </Col>
                </Row>
                <Row>
                    <Col lg={4}>
                        <Card className=" mt-4">
                            <Card.Body>
                                <Row>
                                    <Col className="ps-5">
                                        <h2 className="fw-bold font-color">Sales Engineer</h2>
                                        <hr className="break-line-tittle"/>
                                        <p><b>Fresh Graduate</b></p>
                                        <p>Pacarkembang, Surabayaa</p>
                                        <Button className="mt-2 p-2" size="sm" variant="primary">Daftar</Button>
                                        <p className="mt-5">Resume dapat dikirim melalui email ke <span className="font-color fw-bold">karir@konstrukindo.co.id</span>  dengan subject “<span className="font-color fw-bold"> SESurabaya_Nama </span>” atau dapat klik tombol “Daftar” diatas.</p>
                                    </Col>
                                </Row> 
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={8}>
                        <div className="tentang-pekerjaan mt-5">
                            <h6 className="font-color fw-bold">Tentang Pekerjaan</h6>
                            <hr className="mt-0 break-line-tittle" style={{width: '89px'}} />
                            <p>Proses kerja pada kantor ADK tidak akan berjalan dengan lancar tanpa adanya individu-individu yang kompeten mendukung kelancaran proses operasionalnya. Tim yang berperan di balik pencapaian ini adalah bagian pendukung operasi. Tim inilah yang mendukung beragam proses kerja di kantor agar dapat terus menjadi perusahaan yang dipercaya oleh pelanggan.</p>
                        </div>
                        <div className="tentang-pekerjaan mt-5">
                            <h6 className="font-color fw-bold">Persyaratan</h6>
                            <hr className="mt-0 break-line-tittle" style={{width: '89px'}} />
                            <ul>
                                <li>Pria / Wanita</li>
                                <li>Pendidikan Minimal SMA / SMK</li>
                                <li>Ulet dan mampu berkomunikasi dengan baik</li>
                                <li>Jujur, bertanggung jawab dan mampu berorientasi pada target</li>
                                <li>Penempatan Surabaya</li>
                                <li>Belum menikah</li>
                                <li>Usia antara 20 - 30 tahun</li>
                                <li>Memiliki kendaraan pribadi dan SIM C & A</li>
                                <li>Berpengalaman sebagai Sales Engineer di bidang konstruksi, properti, otomotif, dsb.</li>
                            </ul>
                        </div>
                        <div className="tentang-pekerjaan mt-5">
                            <h6 className="font-color fw-bold">Benefit</h6>
                            <hr className="mt-0 break-line-tittle" style={{width: '89px'}} />
                            <ul>
                                <li>BPJS Kesehatan</li>
                                <li>BPJS Ketenagakerjaan</li>
                                <li>Uang makan</li>
                                <li>Uang Pulsa</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <hr/>
            </Container>
            <Footer/>
        </>
    )
}

export default DetailKarir