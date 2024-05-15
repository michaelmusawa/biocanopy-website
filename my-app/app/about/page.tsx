import Image from 'next/image'
import './about.css';
import Header from '@app/ui/hero'
import SectionHeader from '@app/ui/section-header';
import TeamCard from '@app/ui/team-card';


const About =() => {
  return (
    <>
    <Header 
      title="Brief Introduction"
      otherTitle='About Us' 
      image='/images/about_hero.jpg'
      >Fueling efficiency in every office, we&apos;re the heartbeat of seamless operations. Explore our hub where ingenuity harmonizes with orderliness, redefining the way you work.
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
          <SectionHeader
            h4='Know Our Journey'
            h3='Our Story'
            p=''
            href='#'
          />
          <p>
            While we are a young company sprouting from the ground up,
            our team have experience and expertise on the main areas that we deal in.
            We believe in quality workmanship and strive to provide you with the best service possible.
          </p>
          <p>
            Biocanopy limited company started with just two people who were passionate to be part of the Kenya Marine Fisheries Socio-Economic Development(KEMFSED) at Matsangoni,Kilifi, Kenya.
            Our aim was to venture in moringa extracts (moringa oil,powder and seeds) along the coastal line,
            which has a wide variety of medicinal benefits and are being investigated as anti-cancer agents and anti-microbial.
          </p>
          <p>
            We were able to grow rapidly over time. Due to public demand and our exceptional customer services we have expanded to be a General Supplies Company,
            where besides moringa extracts we do offer: office cleaning services,office stationeries, office machines and equipments ,office branding services, food stuff and cereals supply.
            Our mission is to provide quality products and services with exceptional customer service. We aim to build long-term relationships with all of our clients.
            We believe in providing you with quality products at affordable prices.
          </p>

        </div>
      </div>
    </section>
    <section className="about__drive">
      <SectionHeader
        h4='Our Virtues'
        h3='What Drives Us'
        p=''
        href='#'
      />
      <div className="container drive-wrapper">
        <div className="about-vision-container"> 
        <h4>Vision</h4>
          <div className="img-wrapper">
            <Image
              src='/images/vision.jpg'
              alt="Vision image"
              width={450}
              height={300}
            />
          </div>
          <div className="content-wrapper">
            <p>Vision is the future. We aim to be at the forefront of innovative solutions for businesses. </p>
          
          </div>
        </div>
        <div className="about-mission-container">
          <h4>Mission</h4>
          <div className="img-wrapper">
            <Image
              src='/images/mission.jpg'
              alt="Mission image"
              width={450}
              height={300}
              />
          </div>
          <div className="content-wrapper">
            <p>To provide quality services that are tailored to meet your specific requirements. Our team is committed to delivering exceptional customer satisfaction through providing reliable and efficient solutions.</p>
          </div>
        </div>
        <div className="about-values-container"> 
        <h4>Values</h4>
          <div className="img-wrapper">
            <Image
              src='/images/values.jpg'
              alt="Values image"
              width={450}
              height={300}
              />
          </div>
          <div className="content-wrapper">
            <p>We value and uphold the following principles:</p>
              <ul>
                <li>- Professionalism</li>
                <li>- Reliability</li>
                <li>- Customer Satisfaction </li>                
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section className="about__whyUs">
      <div className="container about__whyUs-container">
        
        <div className="about__section-content">
        <SectionHeader
            h4='Reasons We The Best'
            h3='Why Us'
            p=''
            href='#'
          />
          <p>
            With clear mission and continous bdevelopment biocanopy ltd has always endeavored to deliver a range of quality products and solutions with sustainable results.
            Most of our clients apart from just getting our products,They enjoy our company core values:
          </p>
          <ul>
                    <li><h6>Execeptional Quality Services</h6></li>
                    <li><p>When, while the lovely valley teems with vapour around me, 
                        and the meridian sun strikes the upper surface.
                    </p></li>
                    <li><h6>Reliability</h6></li>
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
    <section >
      <div className="container members">
        <div className="members-wrapper">
          <div className="member">
            <div className="content">
              <h5>Founder</h5>
              <h4>Michael Musawa</h4>
              <p>Technical Personal what makes sure systems and business logic runs smoothly
                and inline with the business objectives.
                Also watches horror films in leisure time.
              </p>
            </div>
            <TeamCard 
                image='/images/man.png'
                height={300}
                width={100}
                title='Founder'
                name='Christine Dama Mukare'         
              />
          </div>
            <div className="member">
            <TeamCard 
              image='/images/man.png'
              height={300}
              width={100}
              title='Founder'
              name='Christine Dama Mukare'         
            />
            </div>
           <div className="member">
           <TeamCard 
              image='/images/man.png'
              height={300}
              width={100}
              title='Founder'
              name='Christine Dama Mukare'         
            />
           </div>
          <div className="member">
          <TeamCard 
              image='/images/man.png'
              height={300}
              width={100}
              title='Founder'
              name='Christine Dama Mukare'         
            />
          </div>  
        </div>
        <div className="members-content">
          <SectionHeader
            h4 = 'Members'
            h3 = 'Meet Our Team'
            p = 'Humbly introducing our esteem team that work selflessly around the clock to make your dream comfort come true. Behold.'
            href='#'
          />
        </div>
      </div>
    </section>
    
    </>
  )
}

export default About