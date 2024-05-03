'use client'

import {ImQuotesLeft} from 'react-icons/im'
import Card from './card'
import '@app/ui/testimonials.css'
import SectionHeader from './section-header'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import '@app/ui/card-slider.css'


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};




const TestimonialSlider = () => {
  return (
    <>
        <Carousel
            swipeable={true}
            draggable={true}
            showDots={true}
            responsive={responsive}
            infinite={true}
            autoPlay={true }
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all 1"
            transitionDuration={5000}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
        >
          
            <div className='carousel-item'>
              <Card 
                image={'/images/man.png'}
                width={150}
                height={300}>
                  <div className="quotes">
                      <ImQuotesLeft/>
                    </div>
                <p className="testimonial__quote">
                Lorem ipsum, Some shit about the company to make people buy and visit the website Some shit about the company to make people buy and visit the website Some shit about the company to make people buy and visit the website
                </p>
                <h5>John</h5>
                <small className="testimonial__title">Accountant</small>
              </Card> 
            </div>
            <div className='carousel-item'>
              <Card 
                  image={'/images/man.png'}
                  width={150}
                  height={300}>
                    <div className="quotes">
                      <ImQuotesLeft/>
                    </div>
                  <p className="testimonial__quote">
                  Lorem ipsum, Some shit about the company to make people buy and visit the website Some shit about the company to make people buy and visit the website Some shit about the company to make people buy and visit the website
                  </p>
                  <h5>John</h5>
                  <small className="testimonial__title">Accountant</small>
                </Card> 
            </div>
            <div className='carousel-item'>
              <Card 
                  image={'/images/man.png'}
                  width={150}
                  height={300}>
                    <div className="quotes">
                      <ImQuotesLeft/>
                    </div>
                  <p className="testimonial__quote">
                  Lorem ipsum, Some shit about the company to make people buy and visit the website Some shit about the company to make people buy and visit the website Some shit about the company to make people buy and visit the website
                  </p>
                  <h5>John</h5>
                  <small className="testimonial__title">Accountant</small>
                </Card> 
            </div>
            <div className='carousel-item'>
              <Card 
                  image={'/images/man.png'}
                  width={150}
                  height={300}>
                    <div className="quotes">
                      <ImQuotesLeft/>
                    </div>
                  <p className="testimonial__quote">
                  Lorem ipsum, Some shit about the company to make people buy and visit the website Some shit about the company to make people buy and visit the website Some shit about the company to make people buy and visit the website
                  </p>
                  <h5>John</h5>
                  <small className="testimonial__title">Accountant</small>
                </Card> 
            </div>
            <div className='carousel-item'>
              <Card 
                  image={'/images/man.png'}
                  width={150}
                  height={300}>
                    <div className="quotes">
                      <ImQuotesLeft/>
                    </div>
                  <p className="testimonial__quote">
                  Lorem ipsum, Some shit about the company to make people buy and visit the website Some shit about the company to make people buy and visit the website Some shit about the company to make people buy and visit the website
                  </p>
                  <h5>John</h5>
                  <small className="testimonial__title">Accountant</small>
                </Card> 
            </div>
          </Carousel>;
    </>
    
  )
}



const Testimonials =() => {
  return (

    <div className="container testimonial">
        <SectionHeader 
            h4 ='Testimonials'
            h3 ='What people are saying about us.'
            p='Some of the things our client have to say about the way we did our supplies to them in the past'
            href='#'
          />
        <div className="slider">
          <TestimonialSlider />
        </div>
    </div>

  )
}

export default Testimonials