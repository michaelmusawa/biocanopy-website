

import Header from '@app/ui/hero';
import {MdEmail} from 'react-icons/md'
import {IoLogoWhatsapp} from 'react-icons/io'
import { MdPermPhoneMsg } from "react-icons/md";
import './contact.css';




const Contact = () => {
  return (
    <>
    <Header 
      title="How Can We Help You" 
      otherTitle='Talk To Us'
      image='/images/contact.jpg'
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod et eveniet voluptas sequi aspernatur reiciendis. Voluptatibus minus nihil suscipit sunt.
    </Header>
    <section className="contact">
      <div className="container contact__container">
        <div className='textContainer'>
          <h1><span>Let&apos;s</span>Work Together</h1>
          <div className="item">
            <a href='#'><MdEmail/></a>
            <span>biocanopy@gmail.com</span>
          </div>
          <div className="item">
            <IoLogoWhatsapp/>
            <span>+254712345678</span>
          </div>
          <div className="item">
            <MdPermPhoneMsg />
            <span>+254712345678</span>
          </div>
        </div>
        <div className="formContainer">
          <form action="">
            <input type="text" required placeholder='Name'/>
            <input type="email" required placeholder='Email'/>
            <textarea rows={8} required placeholder='Write your message here'/>
            <button type="submit">Send Message</button>
          </form>
          
        </div>
        
      </div>
    </section>
    </>
  )
}
export default Contact;