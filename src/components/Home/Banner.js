import { Carousel, Container } from "react-bootstrap"
import imageBanner from "../../assets/img_carousel.png"

const Banner = () => {
    return(
        <Container className="mt-3" id="banner">
            <Carousel slide={false}>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={imageBanner}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={imageBanner}
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={imageBanner}
                    alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </Container>
    )
}

export default Banner