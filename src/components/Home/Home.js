import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../images/banner1.jpg';
import banner2 from '../../images/banner2.jpg';
import banner3 from '../../images/banner3.jpg';
import AboutUS from '../AboutUs/AboutUS';
import Contactus from '../Contactus/Contactus';
import Footer from '../Footer/Footer';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className="container-fluid">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={banner1} alt="First slide" />
            <Carousel.Caption>
              <h1 className="fs-1 fw-bold text-dark">
                "Your Health is always in the first place"
              </h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={banner2} alt="Second slide" />
  
            <Carousel.Caption>
              <h1 className="fs-1 fw-bold text-dark">
                We help you to find the best doctor around you Separated they live
                in Bookmarksgrove right at the coast of the Semantics, a large
                language ocean.
              </h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={banner3} alt="Third slide" />
  
            <Carousel.Caption>
              <h1 className="fs-1 fw-bold dark">
                Guaranted safe & potent Medicine
              </h1>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Services/>
        <AboutUS/>
        <Contactus/>
        <Footer/>
        </div>
    );
};

export default Home;