import SectionHeader from '../section-header'
import Image from 'next/image'
import './portfolio.css'

const PortfolioUi = (
    {   title,
        subtitle,
        headerContent,
        container,
        contentTitle1,
        contentTitle2,
        contentTitle3,
        content1,
        content2,
        content3,
        image1,
        image2,
    
    }:{
        title: string;
        subtitle: string;
        headerContent: string;
        container: string;
        contentTitle1: string;
        contentTitle2: string;
        contentTitle3: string;
        content1: string;
        content2: string;
        content3: string;
        image1: string;
        image2: string;
    
    }) => {
  return (
    <section>
        <div className='container'>
            <SectionHeader
                h4 = {title}
                h3 = {subtitle}
                p = {headerContent}
                href='#'
            />
            <div className={`portfolio-wrapper ${container}`}>        
                <div className='content-container'>
                    <div className="category">
                        <h4> {contentTitle1} </h4>
                        <p>
                            {content1}
                        </p>
                    </div>
                    <div className="category ">
                        <h4> {contentTitle2} </h4>
                        <p>
                            {content2}
                        </p>
                    </div>
                    <div className="category">
                        <h4> {contentTitle3} </h4>
                        <p>
                            {content3}
                        </p> 
                    </div>
                </div>
                <div className='image-container'>
                    <div className="image_wrapper">
                        <Image
                        src={image1} 
                        alt={`${title} image1`}
                        width={350}
                        height={300}/>
                        <Image
                        src={image2}  
                        alt={`${title} image2`}
                        width={350}
                        height={300}/>
                        
                    </div>
                </div>       
            </div>
        </div>

    </section>
        
  )
}

export default PortfolioUi