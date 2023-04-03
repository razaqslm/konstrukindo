import { Card, Container } from "react-bootstrap"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import ctaImage1 from "../../assets/web_icon-01.png"
import ctaImage2 from "../../assets/web_icon-02.png"
import ctaImage3 from "../../assets/web_icon-03.png"
import ctaImage4 from "../../assets/web_icon-04.png"

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

const NewPorduct = () => {
    return(
        <Container className="mt-5" id="new-product">
            <h1 className="text-center title-new-product">Produk Baru</h1>
            <center>
                <hr className="text-center break-line-tittle"/>
            </center>
            <Carousel responsive={responsive} autoPlay autoPlaySpeed={5000} infinite>
                <Card className="align-items-center border-secondary-subtle shadow-sm me-4">
                    <Card.Img variant="top" src={ctaImage1} style={{ width: '157px' }}/>
                    <Card.Body>
                        <Card.Title className="fw-bold title-product">ETR80H</Card.Title>
                        <Card.Text className="desc-product">
                            <p><b>Gasoline Tamping Rammer</b></p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lectus enim, fringilla luctus venenatis at, maximEtiam lectus enim, fringilla luctus venenatis at, maxim.</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="align-items-center border-secondary-subtle shadow-sm me-4">
                    <Card.Img variant="top" src={ctaImage2} style={{ width: '157px' }}/>
                    <Card.Body>
                        <Card.Title className="fw-bold title-product">ETR80H</Card.Title>
                        <Card.Text className="desc-product">
                            <p><b>Gasoline Tamping Rammer</b></p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lectus enim, fringilla luctus venenatis at, maximEtiam lectus enim, fringilla luctus venenatis at, maxim.</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="align-items-center border-secondary-subtle shadow-sm me-4">
                    <Card.Img variant="top" src={ctaImage3} style={{ width: '157px' }}/>
                    <Card.Body>
                        <Card.Title className="fw-bold title-product">ETR80H</Card.Title>
                        <Card.Text className="desc-product">
                            <p><b>Gasoline Tamping Rammer</b></p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lectus enim, fringilla luctus venenatis at, maximEtiam lectus enim, fringilla luctus venenatis at, maxim.</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="align-items-center border-secondary-subtle shadow-sm me-4">
                    <Card.Img variant="top" src={ctaImage4} style={{ width: '157px' }}/>
                    <Card.Body>
                        <Card.Title className="fw-bold title-product">ETR80H</Card.Title>
                        <Card.Text className="desc-product">
                            <p><b>Gasoline Tamping Rammer</b></p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lectus enim, fringilla luctus venenatis at, maximEtiam lectus enim, fringilla luctus venenatis at, maxim.</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="align-items-center border-secondary-subtle shadow-sm me-4">
                    <Card.Img variant="top" src={ctaImage1} style={{ width: '157px' }}/>
                    <Card.Body>
                        <Card.Title className="fw-bold title-product">ETR80H</Card.Title>
                        <Card.Text className="desc-product">
                            <p><b>Gasoline Tamping Rammer</b></p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lectus enim, fringilla luctus venenatis at, maximEtiam lectus enim, fringilla luctus venenatis at, maxim.</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="align-items-center border-secondary-subtle shadow-sm me-4">
                    <Card.Img variant="top" src={ctaImage2} style={{ width: '157px' }}/>
                    <Card.Body>
                        <Card.Title className="fw-bold title-product">ETR80H</Card.Title>
                        <Card.Text className="desc-product">
                            <p><b>Gasoline Tamping Rammer</b></p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lectus enim, fringilla luctus venenatis at, maximEtiam lectus enim, fringilla luctus venenatis at, maxim.</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Carousel>
            <hr />
        </Container>
    )
}

export default NewPorduct