import React,{useState, useEffect} from "react";
import './Slider.css';

const Slider = ({ imagens }) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === imagens.length - 1 ? 0 : prevIndex + 1
        );
      };

      const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? imagens.length - 1 : prevIndex - 1
        );
      };

      useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
      }, [currentIndex]);

      const goToSlide = (index) => {
        setCurrentIndex(index);
      };

      return (
        <div className="slider">
            <button className="arrow left" onClick={prevSlide}>&#10094;</button>
            
            <div className="slider-content" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {imagens.map((imagem, index) => (
                    <a 
                      key={index}
                      href={imagem.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`slide ${index === currentIndex ? 'active' : ''}`}
                    >
                        <img src={imagem.url} alt={imagem.alt} />
                    </a>
                ))}
            </div>
            
            <button className="arrow right" onClick={nextSlide}>&#10095;</button>
            
            <div className="dots">
                {imagens.map((_, index) => (
                    <span key={index} className={`dot ${index === currentIndex ? 'active' : ''}`} onClick={() => goToSlide(index)}/>
                ))}
            </div>
        </div>
      );
};

export default Slider;