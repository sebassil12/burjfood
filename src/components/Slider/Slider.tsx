import { useState } from 'react';
import slider from './slider.module.css';
interface SliderProps {
    slides: {url:string} [];
}

function Slider({slides}:SliderProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious =()=>{
        let isFirstSlide = currentIndex === 0;
        let MovePrevious = isFirstSlide ? slides.length -1 : currentIndex - 1;
        setCurrentIndex(MovePrevious)

    }

    const goToNext =()=>{
        let isLastSlide = currentIndex === slides.length -1;
        let MoveNext = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(MoveNext)
        
    }
    return (
        <div className={slider.slider_container}>
            <div className={slider.leftArrow} onClick={goToPrevious}> &lt; </div>
            <div className={slider.rightArrow} onClick={goToNext}> &gt;</div>
            <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className={slider.image_slider}></div>
            
        </div>
            
        
      );
}

export default Slider;