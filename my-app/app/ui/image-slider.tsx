'use client'

import Image from "next/image"
import '@app/ui/image-slider.css'
import clsx from "clsx";
import { useState,useEffect } from "react";
import { FcNext,FcPrevious } from "react-icons/fc";
import { motion } from "framer-motion";


const carousels = [
  { image:'/images/generalsupplies.jpg',
    title:'GENERAL SUPPLY',
    subtitle: 'OFFICE NEEDS',
    desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?',
  },
  { image:'/images/cereals.jpg',
    title:'CEREALS NOURISHMENT',
    subtitle: 'HEALTHY BITS',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?',
  },
  { image:'/images/gallery2.jpg',
    title:'MORINGA PRODUCTS',
    subtitle: 'NATURAL MAGIC UNLEASHED',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?',
  },
  { image:'/images/janitorial2.jpg',
    title:'CLEANING SERVICES',
    subtitle: 'PRISTINE SPACES',
    desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?',
  },
  ]

  const textVariants = {
    initial:{
      x: -50,
      opacity: 0},
    animate:{
      x: 0, 
      opacity: 1,
      transition:{duration:1, staggerChildren: 0.1}
    },
  };

export const ImageSlider = () => {

  const [ current,setCurrent ] = useState(0);

  type ElementType = {
    image:string, 
    title:string, 
    subtitle:string, 
    desc:string
  }


  const [ elements,setElements ] = useState<ElementType[]>([...carousels]);
  const [initialRender, setInitialRender] = useState(true);

useEffect(() => {
  if (initialRender) {
    setInitialRender(false);
    return;
  }

  let firstElement = elements.shift();
    if (firstElement){
      elements.push(firstElement);
      setElements([...elements])
    }      
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[current])

  
  const nextSlide = () => {
    setCurrent((current + 1) % carousels.length);
  };
  
  const prevSlide = () => {
    setCurrent((current - 1 + carousels.length) % carousels.length);
  };
  
  
    const handleAutoPlay = () => {
        nextSlide();
    };
  
    useEffect(() => {
      const intervalId = setInterval(handleAutoPlay, 15000); 
  
      return () => {
        clearInterval(intervalId);
      };
    });
    
  

  const Carousel = () => {

    
    return (
      <>
        {
          carousels.map(( {image,title,subtitle,desc}, index ) => {
            return(
              <div className={clsx( 'item',
              {
                'active': current === index,
                'prev': ((current - 1 + carousels.length) % carousels.length) === index}
              )}

                key={index}
                >
                  <Image
                    src={image}
                    width={700}
                    height={450}
                    alt={title}
                  />
                
                <motion.div 
                  variants={textVariants} 
                  initial='initial'
                  animate='animate'
                  className="content">
                    <motion.div variants={textVariants} className="author">Biocanopy Limited</motion.div>
                    <motion.div variants={textVariants} className="title">{title}</motion.div>
                    <motion.div variants={textVariants} className="topic">{subtitle}</motion.div>
                    <motion.div variants={textVariants} className="des">
                        {desc}
                    </motion.div>
                    <motion.div variants={textVariants} className="buttons">
                      <button>SEE MORE</button>
                      <button>CONTACT</button>
                    </motion.div>
                </motion.div>
                
              </div> 
              
            
            )
          })
        }
        
      </>
  
    );
  
  }
  
  const Thumbnail = () => {
    return(
      <>
        {
          elements.map((carousel) => {
            return(
              <div className="item"
              key={carousel.title}>
                <Image
                      src={carousel.image}
                      alt={carousel.title}
                      width={100}
                      height={63}
                  />
                  <div className="content">
                      <div className="title">
                          {carousel.title}
                      </div>
                      <div className="description">
                          {carousel.subtitle}
                      </div>
                  </div>
              </div>
            )
            
          })
        }
      </>
    )
  }
  return (
    <>
      <div className="carousel">
        <div className="list">
          <Carousel />
        </div>
      </div>
      <div className="thumbnail">
          <Thumbnail />
      </div>
      <div className="arrows">
          <button 
            onClick={prevSlide}
            id="prev"><FcPrevious />
          </button>
          <button onClick={nextSlide}
            id="prev"><FcNext />
          </button>
      </div>
      
      <div className="time"></div>
    
    </>
      
  
  );
}
