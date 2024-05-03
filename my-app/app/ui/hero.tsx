import Image from "next/image";

const Header = (
    {title, image, height, width, children
    }:{
    title:string,image:string,height:number, width:number,children: React.ReactNode
    }) => {
    return (
      <header className="header">
          <div className="header__container">
              <div className="header__container-bg">
                  <Image
                    width={width}
                    height={height}
                    src={image}
                    alt={title} />
              </div>
              <div className="header__content">
                  <h2>{title}</h2>
                  <p>{children}</p>
              </div>
          </div>
      </header>
     
    )
  }
  
  export default Header