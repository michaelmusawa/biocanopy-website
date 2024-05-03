
import PortfolioUi from './portfolio'


const Supplies = () => {
  return (
    <PortfolioUi
      title='Supplies'
      subtitle='What We Supply Best'
      headerContent='Biocanopy Limited Company is a young company sprouting from the ground up, our team have enoupur experience and expertise the the main areas that we deal in. We believe in quality workmanship and strive to provide you with the best service possible.'
      container='supplies'
      contentTitle1='Office Equipments'
      contentTitle2='Stationeries'
      contentTitle3='Hardware & Software'
      content1='We provide the following office equipment:
        Desk and chair for each employee.
        A computer with internet access, printers and scanners.
        Electronic tablets for presentations or work on the go.

      Why are paper documents a problem?  

      Going through filing cabinets to retrieve documents takes valuable time.  
      Boxes of paper take up valuable office space.  
      Offices experience downtime when searching for documents. 
      Security is a concern with only a key to lock away paper documents.'
      content2='For your convenience we also supply stationery items such as pens, pencils, highlighters, notebook paper, postcards, envelopes, stamps, and business cards'
      content3='In addition to providing stationery items, we also offer hardware and software that complements them.
      We provide the following computer hardware and software:
   
        Laptops and desktops computers.
        Software such as Microsoft Office Suite, Google Workspace, Adobe Premiere Pro, Photoshop etc.
        Software such as Microsoft Office Suite, Google Workspace, LibreOffice, Mozilla Firefox, Chrome, VLC Media Player, Audacity Recorder, Adobe.
        Software such as Microsoft Office Suite, Google Workspace, LibreOffice, and other productivity tools.
        Software such as Microsoft Word, Excel, PowerPoint, Google Suite, etc.
        Printers ink cartridges and toner cartridges.'
      image1='/images/receptionist.jpg'
      image2='/images/printer-fleet.jpg'
    />
       
  )
}

export default Supplies