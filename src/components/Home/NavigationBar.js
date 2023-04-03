import { useNavigate } from 'react-router-dom';
import { Container, Image, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import logoImage from '../../assets/adk_logo.png'

const NavigationBar = () => {
    const navigate = useNavigate()
    return(
        <Navbar bg="light" expand="lg" id='navigation-bar'>
            <Container>
                <Navbar.Brand onClick={() => navigate('/')}>
                <Image src={logoImage} height="50px"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link className='ps-5 pe-5 fw-bold' onClick={() => navigate('/tentang-kami')}>Tentang Kami</Nav.Link>
                    <NavDropdown className='ps-5 pe-5 fw-bold' title="Produk" id="basic-nav-dropdown">
                    <NavDropdown.Item onClick={() => navigate('/produk')}>Concrete Technology</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link className='ps-5 pe-5 fw-bold' onClick={() => navigate('/news')}>News</Nav.Link>
                    <Nav.Link className='ps-5 pe-5 fw-bold' onClick={() => navigate('/kontak')}>Kontak</Nav.Link>
                    <Nav.Link className='ps-5 pe-5 fw-bold' onClick={() => navigate('/karir')}>Karir</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar