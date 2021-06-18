import  React, {useState } from 'react';
import { Slides } from './Slides';
import { VscChevronRight, VscChevronLeft } from "react-icons/vsc";

const SlideShow = ({ slides }) => {
    const [current, setCurrent] = useState(0)
    const length = slides.length

    const nextSlide = () => {
        setCurrent(current === length -1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length -1 : current -1)
    }

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }
    return (
        <section className="slider container mx-auto">
            <VscChevronLeft className="left-arrow color" onClick={prevSlide} />
             <VscChevronRight className="right-arrow" onClick={nextSlide}/>
        {Slides.map((slide, index) => {
            return (
                
                <div className={index === current ? 'slide active' : 'slide'} key={index}>  
                {index === current && (<span className="lense-slide">{slide.slide}</span>)}   
                </div>
            )
            
            })}
        </section>
    )
};

export default SlideShow