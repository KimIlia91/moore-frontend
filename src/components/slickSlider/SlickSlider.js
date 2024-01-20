import Slider from "react-slick";

import arrowLeft from '../../icons/arrow-left.svg';
import arrowRight from '../../icons/arrow-right.svg';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import './slickSlider.scss';

const SlickSlider = ({ children, slidesToShow }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 400,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };
    return (
        <div>
            <Slider {...settings}>
                { children }
            </Slider>
        </div>
    );
}

function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style }}
            onClick={onClick}
        >
            <img src={ arrowLeft } alt="arrow-left" />
        </div>
    );
}

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={ className }
            style={{ ...style }}
            onClick={ onClick }
        >
            <img src={ arrowRight } alt="arrow-right" />
        </div>
    );
}

export default SlickSlider;