import React from 'react'
import './Landing.css'
import Banner from '../Banner/Banner'
import { images } from '../../assets/images'



// import image1 from './image1.jpg'
// import image1 from './image2.jpg'
// import image1 from './image3.jpg'

// const images = [img1, img2, img3];

// const BackgroundCarousel = ({ slideInterval = 5000 }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Automatically slide background images
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, slideInterval);
//     return () => clearInterval(timer);
//   }, [slideInterval]);

//   // Manual navigation handlers
//   const goToPrevious = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//   };

//   const goToNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };
// }
function Landing({ onNavigate }) {
  return (
    <section className="screen screen-landing">
      <Banner images={images} />
      {/* <div className="container">
        <div className="background-element">
          <p className="screen-eyebrow">Landing screen</p>
          <h1>Test Landing Screen</h1>
          <p className="screen-copy">Click a navbar item or one of the buttons below to swap screens.</p>
          <div className="carousel">
            <div className="group">
                <div className="slide-1"></div>
                <div className="slide-2"></div>
                <div className="slide-3"></div>
                <div className="slide-4"></div>
                <div className="slide-5"></div>
            </div>
            <div aria-hidden className="group">
                <div className="slide-1"></div>
                <div className="slide-2"></div>
                <div className="slide-3"></div>
                <div className="slide-4"></div>
                <div className="slide-5"></div>
            </div>
        </div>
          {/* <Banner/> */}
        {/* </div>  */}
          {/* <div className="foreground-element">
            <button type="button" onClick={() => onNavigate('dev')}>
            Open Dev
          </button>
          <button type="button" onClick={() => onNavigate('contact')}>
            Open Contact
          </button>
          </div>
      </div> */}
    </section>
  )
}

export default Landing