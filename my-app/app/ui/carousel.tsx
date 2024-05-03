
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from './card';
import '@app/ui/card-slider.css'


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
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




const CardSlider = () => {
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
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
        >
          
            <div className='carousel-item'>
              <Card 
                image='/images/equipments.jpg'
                width={150}
                height={300}>
                <h4>Office Equipments Supply</h4>
                <p>Our team provides a wide range of Office Equipment and Stationery Supplies to fit any need you may have. </p>
              </Card>
            </div>
            <div className='carousel-item'>
              <Card 
                image='/images/stationeries.jpg'
                width={150}
                height={300}>
                <h4>Stationary Supplies</h4>
                <p>Our team provides a wide range of Office Equipment and Stationery Supplies to fit any need you may have. </p>
              </Card>
            </div>
            <div className='carousel-item'>
              <Card 
                image='/images/food.jpg'
                width={150}
                height={300}>
                <h4>Food & cereals supply</h4>
                <p>Our chefs can prepare and deliver a wide variety of dishes to suit any office needs </p>
              </Card>
            </div>
            <div className='carousel-item'>
              <Card 
                image='/images/moringa.jpg'
                width={150}
                height={300}>
                <h4>Moringa Products</h4>
                <p>Enjoy the health benefits of Moringa leaves in our organic and non-GMO blend. </p>
              </Card>
            </div>
            <div className='carousel-item'>
              <Card 
                image='/images/janitorial3.jpg'
                width={150}
                height={300}>
                <h4>Janitorial</h4>
                <p>Our professional Janitorial service includes regular cleaning of offices, kitchens, bathrooms and restrooms. </p>
              </Card>
            </div>
            <div className='carousel-item'>
              <Card 
                image='/images/pest.jpg'
                width={150}
                height={300}>
                <h4>Fumigation & Pest Control</h4>
                <p>Get rid of unwanted pests with our professional fumigation service. </p>
              </Card>
            </div>
        </Carousel>;
    </>
    
  )
}

export default CardSlider