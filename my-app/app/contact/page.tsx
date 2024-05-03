

import Header from '@app/ui/hero';
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'
import { MdPermPhoneMsg } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa"
import { FaFacebookF } from "react-icons/fa"
import { AiOutlineTwitter } from "react-icons/ai"
import { AiFillInstagram } from "react-icons/ai"
import './contact.css';




const Contact = () => {
  return (
    <>
    <Header 
      title="About Us" 
      image='/images/contact.jpg'
      width={1800}
      height={563}
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod et eveniet voluptas sequi aspernatur reiciendis. Voluptatibus minus nihil suscipit sunt.
    </Header>
    <section className="contact">
      <div className="container contact__container">
        <div className="contact__wrapper">
          <h4>Contant Us</h4>
          <a href='christinedama@gmail.com' 
            target='_blank'
            rel='noreferrer noopener'>
              <MdEmail/>
          </a>
          <a href='https://bioconopyltd' 
            target='_blank'
            rel='noreferrer noopener'>
              <BsMessenger/>
          </a>
          <a href='https://wa.me/+254715132510' 
            target='_blank'
            rel='noreferrer noopener'>
              <IoLogoWhatsapp/>
          </a>
          <a href='https://wa.me/+254715132510' 
            target='_blank'
            rel='noreferrer noopener'>
              <MdPermPhoneMsg />
          </a>
        </div>
        <div className="social__wrapper">
          <h4>Follow Us</h4>
        <a href='#' 
            target='_blank'
            rel='noreferrer noopener'>
              <FaLinkedinIn/>
          </a>
          <a href='#' 
            target='_blank'
            rel='noreferrer noopener'>
              <FaFacebookF/>
          </a>
          <a href='#' 
            target='_blank'
            rel='noreferrer noopener'>
              <AiOutlineTwitter/>
          </a>
          <a href='#' 
            target='_blank'
            rel='noreferrer noopener'>
              <AiFillInstagram />
          </a>
        </div>
      </div>
    </section>
    </>
  )
}
export default Contact;