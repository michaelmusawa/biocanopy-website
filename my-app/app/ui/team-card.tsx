import Image from "next/image"
import { FaLinkedinIn } from "react-icons/fa"
import { FaFacebookF } from "react-icons/fa"
import { AiOutlineTwitter } from "react-icons/ai"
import { AiFillInstagram } from "react-icons/ai"

const TeamCard = (
    {image,height,width,title,name
    }:{
        image:string;
        height:number;
        width:number;
        title:string;
        name:string}
) => {
  return (
    <div className='team-card'>
        <div className="team-card__wrapper">
            <Image 
                src={image}
                height={height}
                width={width}
                alt={title}
            />
            <div className="team-card-content">
                <h5>{title}</h5>
                <h4>{name}</h4>
            </div>
            <div className="socials">
                <a href="https://linkedin.com/" target="_blank" rel="noreferrer noopener"><FaLinkedinIn/></a>
                <a href="https://facebook.com/" target="_blank" rel="noreferrer noopener"><FaFacebookF/></a>
                <a href="https://twitter.com/" target="_blank" rel="noreferrer noopener"><AiOutlineTwitter/></a>
                <a href="https://instagram.com/" target="_blank" rel="noreferrer noopener"><AiFillInstagram/></a>
            </div>
        </div>
        

    </div>
  )
}

export default TeamCard