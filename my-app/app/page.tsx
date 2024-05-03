'use client'


import { ImageSlider } from '@app/ui/image-slider'
import '@app/home.css'
import Card from './ui/card'
import CardSlider from './ui/carousel'
import Testimonials from './ui/testimonials'
import SectionHeader from './ui/section-header'
import TeamCard from './ui/team-card'
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react'

const variants = {
  initial: {
    x: -500,
    y: 100, 
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: { duration: 1, staggerChildren: 0.1 }
  }
}

const cardVariants = {

  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0, transition: { duration: 1}}
};

const Home = () => {
  const ref = useRef<HTMLInputElement>(null)
  const isInView = useInView(ref,{margin:'-400px'})


  return (
    <main>
      <section className='hero'>
        <ImageSlider />
      </section>
      <motion.section
        ref={ref}>
        <motion.div 
          className='container about'
          
          >
          <motion.div 
            className="left-container"
            variants={variants}
            initial='initial'
            animate={isInView && 'animate'}>
            <SectionHeader
              h4 = 'About Us'
              h3 = 'The Solution To General Supplies'
              p = 'Biocanopy Limited Company is a young company sprouting from the ground up, our team have enoupur experience and expertise the the main areas that we deal in. We believe in quality workmanship and strive to provide you with the best service possible.'
              href='/about'
          />
          </motion.div>
          <motion.div className="right-container" 
            variants={cardVariants}>
            <Card 
              image='/images/mission.jpg'
              width={150}
              height={300}>
              <h4>Our Mission</h4>
              <p>To provide quality services that are tailored to meet your specific requirements. Our team is committed to delivering exceptional customer satisfaction through providing reliable and efficient solutions. </p>
            </Card> 
            <Card 
              image='/images/vision.jpg'
              width={150}
              height={300}>
              <h4>Our Vision</h4>
              <p>Vision is the future. We aim to be at the forefront of innovative solutions for businesses. </p>
            </Card>
            <Card 
              image='/images/why.jpg'
              width={150}
              height={300}>
              <h4>Why Choose Us</h4>
              <p>We are passionate about providing quality services that exceed your expectations. </p>
            </Card>
            <Card 
              image='/images/values.jpg'
              width={150}
              height={300}>
              <h4>Values</h4>
              <p>We value and uphold the following principles:
                    <ul>
                      <li>- Professionalism</li>
                      <li>- Reliability</li>
                      <li>- Customer Satisfaction</li>
                    </ul>
                    
                </p>
            </Card>
          </motion.div>

        </motion.div>
      </motion.section>
      <section>
        <div className="container services">
          <SectionHeader
            h4 = 'Services'
            h3 = 'What We Offer?'
            p = "Experience tranquility as you entrust us with the expertise of our craft, nurturing your office to flourish effortlessly in our capable hands. Embrace the serenity as we custom-tailor our exceptional services to meet your unique needs, fostering a harmonious environment where productivity thrives and worries dissolve into the ether."
            href='/services'
          />
          <div className="slider">
            <CardSlider />
          </div>
        </div>
      </section>
      <section>
        <div className="container members">
          <div className="left-container">
            
            <TeamCard 
              image='/images/man.png'
              height={300}
              width={100}
              title='Founder'
              name='Christine Dama Mukare'         
              />
              <TeamCard 
              image='/images/man.png'
              height={300}
              width={100}
              title='Founder'
              name='Christine Dama Mukare'         
              />
              <TeamCard 
              image='/images/man.png'
              height={300}
              width={100}
              title='Founder'
              name='Christine Dama Mukare'         
              />
              <TeamCard 
              image='/images/man.png'
              height={300}
              width={100}
              title='Founder'
              name='Christine Dama Mukare'         
            />
          </div>
          <div className="right-container">
            <SectionHeader
                h4 = 'Members'
                h3 = 'Meet Our Team'
                p = 'Humbly introducing our esteem team that work selflessly around the clock to make your dream comfort come true. Behold.'
                href='#'
              />
          </div>
        </div>
      </section>
      <section>
        <Testimonials />
      </section> 
      
      
    </main>
  )
}

export default Home


