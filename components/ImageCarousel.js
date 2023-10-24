import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles//global.css';
const ImageCarousel = ({ images }) => {
    return (
        <Carousel  autoPlay infiniteLoop interval={3000}>
            {images.map((image, index) => (
                <div key={index}>
                    <img src={image} alt={`Image ${index}`} />
                </div>
            ))}
        </Carousel>
    );
};

export default ImageCarousel;
