import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../images/banner1.jpg';
import banner2 from '../../images/banner2.jpg';
import banner3 from '../../images/banner3.jpg';
import AboutUS from '../AboutUs/AboutUS';
import Contactus from '../Contactus/Contactus';
import Footer from '../Footer/Footer';
import Guides from '../Guides/Guides';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className="container-fluid">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={banner1} alt="First slide" />
            <Carousel.Caption>
              <h1 className="fs-1 fw-bold text-white">
                "Enjoy Vacation With <span className="text-danger">Relax-Travel</span> "
              </h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={banner2} alt="Second slide" />
  
            <Carousel.Caption>
              <h1 className="fs-1 fw-bold text-white">
              "Explore Your Summer Holiday With Us & Enjoy"
              </h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={banner3} alt="Third slide" />
  
            <Carousel.Caption>
              <h1 className="fs-1 fw-bold text-white">
              Travel to the any corner of the world, without going around in circles.
              </h1>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Services/>
        <Guides/>
        <AboutUS/>
        <Contactus/>
        <Footer/>
        </div>
    );
};

export default Home;