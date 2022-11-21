import React from 'react'
import NavLand from './home/NavLand'
import PiePage from './home/PiePage'
import Carousel from 'react-bootstrap/Carousel';
import {Carrusel10, CarruselIn, DivTexto} from '../styled/StyledComponents'
import Marquee from "react-fast-marquee";
import '../styled/main.css'

function LandingPage() {
  return (
    <>
    <NavLand/>

    <CarruselIn>
 

        <DivTexto>            
            <Marquee className='textomove' speed={'150'} gradientColor={'false'}>
            I can be a React component, multiple React components, or just some text.
           </Marquee>       
        </DivTexto>
        <Carrusel10>
        <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src="https://res.cloudinary.com/felixces/image/upload/v1668972432/Retogithub/slide1_hyshuz.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/felixces/image/upload/v1668972438/Retogithub/slide2_de6vol.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/felixces/image/upload/v1668972443/Retogithub/slide3_e8mghg.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </Carrusel10>

    </CarruselIn>
    <PiePage/>
    </>
  )
}

export default LandingPage