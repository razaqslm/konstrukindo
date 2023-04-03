import { Col, Container, Row } from "react-bootstrap"

const ProfilPerusahaan = () => {
    return(
        <Container className="mt-5" id="profil-perusahaan">
            <Row>
                <Col lg={4}>
                    <h1 className="fw-bolder font-color">Profil Perusahaan</h1>
                </Col>
                <Col lg={8} className="content-tentang-kami">
                    <p>PT. Andalan Dinamika Konstrukindo (ADK) merupakan importir peralatan konstruksi, untuk menanggapi perkembangan ekonomi nasional yang begitu pesat dalam satu dekade terakhir ini, khususnya dibidang pembangunan infrastruktur, properti dan perumahan maka kami bertekad untuk ikut berperan aktif dalam meraih peluang bisnis ini, dan berkontribusi secara sinergi dalam pembangunan di Indonesia. </p>
                    <p className="mb-0">ADK didirikan pada tanggal 25 Agustus 2008, berlokasi diwilayah Kembangan Jakarta Barat. Dengan komitmen untuk menjadi perusahaan yang terdepan dengan kinerja terbaik dalam peralatan industri dan bangunan di Indonesia. ADK melangkah untuk memenuhi kebutuhan pembangunan di Indonesia dengan menyediakan berbagai peralatan konstruksi dengan harga yang bersaing dan berkualitas.</p>
                </Col>
            </Row>
            <Row className="mt-2">
                <Col lg={4}>
                    <h1 className="fw-bolder font-color">Visi</h1>
                </Col>
                <Col lg={8} className="content-tentang-kami">
                    <p className="mb-0">Menjadi perusahaan alat-alat konstruksi yang terpercaya.</p>
                </Col>
            </Row>
            <Row className="mt-2">
                <Col lg={4}>
                    <h1 className="fw-bolder font-color">Misi</h1>
                </Col>
                <Col lg={8} className="content-tentang-kami">
                    <ul className="mb-0">
                        <li>Memberikan beragam variasi produk dengan kualitas yang terbaik.</li>
                        <li>Memberikan pelayanan maksimal kepada pelanggan.</li>
                        <li>Meningkatkan profesionalisme untuk memajukan perusahaan.</li>
                    </ul>
                </Col>
            </Row>
            <hr />
        </Container>
    )
}

export default ProfilPerusahaan