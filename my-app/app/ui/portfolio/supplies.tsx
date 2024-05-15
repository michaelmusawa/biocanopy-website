
import PortfolioUi from './portfolio'


const Supplies = () => {
  return (
    <PortfolioUi
      title='Supplies'
      subtitle='What We Supply Best'
      headerContent=''
      container='supplies'
      contentTitle1='Office Equipments'
      contentTitle2='Stationeries'
      contentTitle3='Hardware & Software'
      content1='We provide the following:
        Office desks and chairs.
        Desktops, TV screens, laptops, tablets, printers and scanners.
        Also internet equipments and installation.'
      content2='For your convenience we also supply variety stationeries such as pens,
       pencils, highlighters, notebook paper, postcards, envelopes, stamps, company IDs and business cards'
      content3='We also offer Software that complements them.
       
        Software such as Microsoft Office Suite, Google Workspace, Adobe Premiere Pro, Photoshop etc.
        Software such as Microsoft Office Suite, Google Workspace, LibreOffice, Mozilla Firefox, Chrome, VLC Media Player, Audacity Recorder, Adobe.
        Software such as Microsoft Office Suite, Google Workspace, LibreOffice, and other productivity tools.
        Software such as Microsoft Word, Excel, PowerPoint, Google Suite, etc.
        Printers ink cartridges and toner cartridges.'
      image1='/images/equipments.jpg'
      image2='/images/stationeries.jpg'
    />
       
  )
}

export default Supplies