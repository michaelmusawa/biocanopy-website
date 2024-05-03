import Header from "@app/ui/hero"
import Services from "@app/ui/portfolio/service"
import Supplies from "@app/ui/portfolio/supplies"
import Food from "@app/ui/portfolio/food"
import Cleaning from "@app/ui/portfolio/cleaning"



const Portfolio = () => {
  return (
    <div>
      <Header 
        title="Our Portfolio" 
        image='/images/portfolio.jpg'
        width={1800}
        height={563}
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod et eveniet voluptas sequi aspernatur reiciendis. Voluptatibus minus nihil suscipit sunt.
      </Header>
      <Services/>
      <Supplies/>
      <Food/>
      <Cleaning/>
    </div>
   
  )
}

export default Portfolio
