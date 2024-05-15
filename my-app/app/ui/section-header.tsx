import Link from "next/link"


const SectionHeader = (
    {h4,h3,p,href}:{h4:string,h3:string,p:string,href:string},
    ) => {
  return (
    <div className='section-header'>
          <div className='section-header-content'>
            <div className="head">
              <hr />
              <h4>{h4}</h4>
            </div>
            <h3>{h3}</h3>
            <p>{p}</p>
            <Link href={href}><button>Read More</button></Link>
          </div>
    </div>
  )
}

export default SectionHeader