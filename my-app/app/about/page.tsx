import Image from 'next/image'
import './about.css';
import Header from '@app/ui/hero'


const About =() => {
  return (
    <>
    <Header 
      title="About Us" 
      image='/images/about_hero.jpg'
      width={1800}
      height={563}
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod et eveniet voluptas sequi aspernatur reiciendis. Voluptatibus minus nihil suscipit sunt.
    </Header>
    <section className="about__story">
      <div className="container about__story-container">
        <div className="about__section-image">
          <Image
           src='/images/company.jpg' 
           alt="Our story image"
           width={400}
           height={350} />
        </div>
        <div className="about__section-content">
          <h1>Our Story</h1>
          <p>
            While we are a young company sprouting from the ground up,
            our team have enoupur experience and expertise the the main areas that we deal in.
            We believe in quality workmanship and strive to provide you with the best service possible.
          </p>
          <p>
            Biocanopy limited company started with just two people who were passionate to be part of the Kenya Marine Fisheries Socio-Economic Development(KEMFSED) at Matsangoni,KIlifi,kenya.
            Our aim was to venture in moringa extracts (moringa oil,powder and seeds) along the coastal line,
            which has a wide variety of medicinal benefits and are being investigated as anti-cancer agents.and antimicrobials.
          </p>
          <p>
            We were able to grow rapidly over time. Due to public demand and our exceptional customer services we have expanded to be a general supplies comapany,
            where besides moringa extarcts we do offer: office cleaning services,office stationationaries,machines and equpiments ,office branding services and food stuff.
            Our mission is to provide quality products and services with exceptional customer service. We aim to build long-term relationships with all of our clients.
            We believe in providing you with quality products at affordable prices.
          </p>

        </div>
      </div>
    </section>
    <section className="about__vision">
      <div className="container about__vision-container">
        
        <div className="about__section-content">
          <h1>Our Vision</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit omnis iure nam sunt, nihil ea corporis eum similique ex assumenda nesciunt at odio quod maxime tempora accusamus a et architecto.
            Consectetur laboriosam eaque maiores ea neque voluptatem sapiente magnam eos.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit omnis iure nam sunt, nihil ea corporis eum similique ex assumenda nesciunt at odio quod maxime tempora accusamus a et architecto.
            Consectetur laboriosam eaque maiores ea neque voluptatem sapiente magnam eos.
          </p>

        </div>
        <div className="about__section-image">
        <Image
           src='/images/generalsupplies.jpg'
           alt="Our story image"
           width={400}
           height={350} />
        </div>
      </div>
    </section>
    <section className="about__mission">
      <div className="container about__mission-container">
        <div className="about__section-image">
        <Image
           src='/images/cleaning.jpg'
           alt="Our story image"
           width={400}
           height={350} />
        </div>
        <div className="about__section-content">
          <h1>Our Mission</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit omnis iure nam sunt, nihil ea corporis eum similique ex assumenda nesciunt at odio quod maxime tempora accusamus a et architecto.
            Consectetur laboriosam eaque maiores ea neque voluptatem sapiente magnam eos.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit omnis iure nam sunt, nihil ea corporis eum similique ex assumenda nesciunt at odio quod maxime tempora accusamus a et architecto.
            Consectetur laboriosam eaque maiores ea neque voluptatem sapiente magnam eos.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Illo, earum dolores. Earum rerum asperiores maxime!
          </p>

        </div>
      </div>
    </section>
    <section className="about__whyus">
      <div className="container about__whyus-container">
        
        <div className="about__section-content">
          <h1>Why us</h1>
          <p>
            With clear mission and continous bdevelopment biocanopy ltd has always endeavored to deliver a range of quality products and solutions with sustainable results.
            Most of our clients apart from just getting our products,They enjoy our company core values:
          </p>
          <ul>
                    <li><h6>Execeptional Quality Services</h6></li>
                    <li><p>When, while the lovely valley teems with vapour around me, 
                        and the meridian sun strikes the upper surface.
                    </p></li>
                    <li><h6>Reliabilty</h6></li>
                    <li><p>When, while the lovely valley teems with vapour around me, 
                        and the meridian sun strikes the upper surface.
                    </p></li>
                    <li><h6>Customer Service</h6></li>
                    <li><p>When, while the lovely valley teems with vapour around me, 
                        and the meridian sun strikes the upper surface.
                    </p></li>
                    <li><h6>Affordable Price</h6></li>
                    <li><p>When, while the lovely valley teems with vapour around me, 
                        and the meridian sun strikes the upper surface.
                    </p></li>
                    <li><h6>Accountability </h6></li>
                    <li><p>When, while the lovely valley teems with vapour around me, 
                        and the meridian sun strikes the upper surface.
                    </p></li>
                </ul>

        </div>
        <div className="about__section-image">
        <Image
           src='/images/generalsupplies.jpg'
           alt="Our story image"
           width={400}
           height={350} />
        </div>
      </div>
    </section>
    
    </>
  )
}

export default About