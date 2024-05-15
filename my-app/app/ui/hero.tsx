import Image from "next/image";
import TypingText from '@app/ui/TypingText';


const Header = (
    {title, otherTitle, image, children
    }:{
    title:string, otherTitle:string, image:string,children: React.ReactNode
    }) => {
    return (
      <section className="header">
          <div className="header__container">
              <div className="header__container-bg">
                  <Image
                    fill
                    src={image}
                    alt={title} />
              </div>
              <div className="header__content">
                  <h2><TypingText initialText={title} otherText={otherTitle}/></h2>
                  <p>{children}</p>
              </div>
          </div>
      </section>
     
    )
  }
  
  export default Header