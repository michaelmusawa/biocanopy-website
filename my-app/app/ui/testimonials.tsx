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
            autoPlaySpeed={10000}
            keyBoardControl={true}
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
                  <h5>John D</h5>
                  <div className="quotes">
                      <ImQuotesLeft/>
                    </div>
                <p className="testimonial__quote">
                  From pens to desks, and even snacks for our pantry, this company has everything we need! Their prompt delivery and quality products have made them our go-to for all office supplies.
                </p>
              </Card> 
            </div>
            <div className='carousel-item'>
              <Card 
                  image={'/images/man.png'}
                  width={150}
                  height={300}>
                    <h5>Emily S</h5>
                    <div className="quotes">
                      <ImQuotesLeft/>
                    </div>
                  <p className="testimonial__quote">
                    As a busy office manager, I appreciate the convenience of having one supplier for everything from stationery to cleaning supplies. This companys diverse offerings and reliable service make my job much easier.
                  </p>
                </Card> 
            </div>
            <div className='carousel-item'>
              <Card 
                  image={'/images/man.png'}
                  width={150}
                  height={300}>
                    <h5>David L</h5>
                    <div className="quotes">
                      <ImQuotesLeft/>
                    </div>
                  <p className="testimonial__quote">
                  Our office has never been cleaner thanks to their janitorial services! From regular cleaning to specialty tasks, they consistently exceed our expectations. Plus, their commitment to eco-friendly products aligns with our company values.
                  </p>
                </Card> 
            </div>
            <div className='carousel-item'>
              <Card 
                  image={'/images/man.png'}
                  width={150}
                  height={300}>
                     <h5>Sarah H</h5>
                    <div className="quotes">
                      <ImQuotesLeft/>
                    </div>
                  <p className="testimonial__quote">
                  I never knew I could get fresh fruits and cereals delivered alongside our office supplies until we found this company. Its a game-changer for our workplace wellness initiatives, and the team loves the variety!
                 </p>
                </Card> 
            </div>
            <div className='carousel-item'>
              <Card 
                  image={'/images/man.png'}
                  width={150}
                  height={300}>
                    <h5>Michael W</h5>
                    <div className="quotes">
                      <ImQuotesLeft/>
                    </div>
                  <p className="testimonial__quote">
                  Furniture shopping used to be a headache, but not anymore! This company offers a wide selection of stylish and functional office furniture. Their expert advice helped us transform our workspace into a productive environment.
                  </p>
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