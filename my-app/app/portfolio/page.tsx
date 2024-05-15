import Header from "@app/ui/hero"
import Services from "@app/ui/portfolio/service"
import Supplies from "@app/ui/portfolio/supplies"
import Food from "@app/ui/portfolio/food"
import Cleaning from "@app/ui/portfolio/cleaning"



const Portfolio = () => {
  return (
    <div>
      <Header 
        title="What We Offer" 
        otherTitle="Our Portfolio"
        image='/images/portfolio.jpg'
      >  Dive into our portfolio below to discover how we&apos;ve and can consistently 
        bring innovative solutions and strategic insights to the table. We can do the same for your company! 
      </Header>
      <Services/>
      <Supplies/>
      <Food/>
      <Cleaning/>
    </div>
   
  )
}

export default Portfolio
