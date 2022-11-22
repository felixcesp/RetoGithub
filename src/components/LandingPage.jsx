import React from 'react'
import NavLand from './home/NavLand'
import PiePage from './home/PiePage'
import Carousel from 'react-bootstrap/Carousel';
import {Carrusel10, CarruselIn, CineHome, CineHomeIn, DivTexto, VideoHome, VideoHome2, VideoHome3} from '../styled/StyledComponents'
import Marquee from "react-fast-marquee";


import '../styled/main.css'

function LandingPage() {
  const tab = <>&nbsp;&nbsp;&nbsp;&nbsp;</>;
  return (
    <>
    <NavLand/>

    <CarruselIn>
 

        <DivTexto>            
            <Marquee className='textomove' speed={'70'} gradientColor={'false'}>
            {tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}{tab}
            {tab}{tab} Welcome Evaluator, this is a fantastic experiencie, for you and 
            us to keep a register of Github user repositories, please sail into App and you will find 
            everything you need ..ENJOY IT.
           </Marquee>       
        </DivTexto>


        <Carrusel10>
    <Carousel fade  >
      <Carousel.Item >
        <img
          className="d-block w-100 "
          src="https://res.cloudinary.com/felixces/image/upload/v1668972432/Retogithub/slide1_hyshuz.jpg"
          alt="Api Github"
        />
        <Carousel.Caption className='changecolor'>
          <h3 className='textoslide'>Sail in Github API</h3>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/felixces/image/upload/v1668972438/Retogithub/slide2_de6vol.jpg"
          alt="Second slide"
        />
        <Carousel.Caption className='changecolor2'>
          <h3 className='textoslide'>Create your gituser Repos</h3> 
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item >
        <img 
          className="d-block w-100"
          src="https://res.cloudinary.com/felixces/image/upload/v1668972443/Retogithub/slide3_e8mghg.jpg"
          alt="Third slide"
        />

        <Carousel.Caption className='changecolor' >
          <h3 className='textoslide'>Check gituser Repos</h3>
        
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        
    </Carrusel10>
    
    </CarruselIn>

    <CineHomeIn>


    <CineHome>
      <VideoHome2>
      <VideoHome>
      <iframe className='embed-responsive-item' src='https://www.youtube.com/embed/tgbNymZ7vqY' title='hola' width='auto' height={'auto'}></iframe> 
      <h1>APP SAILING</h1>
      </VideoHome>
      
      <VideoHome>
      <iframe className='embed-responsive-item' src='https://www.youtube.com/embed/tgbNymZ7vqY' title='hola'  width='auto' height={'auto'} ></iframe>
      <h1>MY PITCH</h1>
      </VideoHome>
      </VideoHome2>
    </CineHome>
    

    <VideoHome3>
      
<div class="book">

  <input class='noseen' type="checkbox" id="c1"/>
  <input class='noseen' type="checkbox" id="c2"/>
  <input class='noseen' type="checkbox" id="c3"/>
  
  <div id="cover">
    <img class='imgbook' src="https://res.cloudinary.com/felixces/image/upload/v1669078481/Retogithub/portada_byjibf.jpg" alt="Cover"/>
  </div>

<div class="flip-book">

    <div class="flip" id="p1">
      <div class="back">
        <img src="1.jpg" alt=""/>
        <label for="c1" class="back-btn">Before</label>
      </div>
      <div class="front">
        <h2>Page 1</h2>
        <label for="c1" class="next-btn">NEXT</label>
      </div>
    </div>
  
    <div class="flip" id="p2">
      <div class="back">
        <img src="2.jpg" alt=""/>
        <label for="c2" class="back-btn">Before</label>
      </div>
      <div class="front">
        <h2>Page 2</h2>
        <label for="c2" class="next-btn">NEXT</label>
      </div>
    </div>
  
    <div class="flip" id="p3">
      <div class="back">
        <label for="c3" class="back-btn">Before</label>
      </div>
      <div class="front">
        <h2>Page 3</h2>
        <label for="c3" class="next-btn">NEXT</label>
      </div>
    </div>
  </div>
</div>
 
    </VideoHome3>
   

    </CineHomeIn>

    <PiePage/>

    </>
  )
}

export default LandingPage