'use client'

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { FaBars } from "react-icons/fa6";
import { MdOutlineClose } from 'react-icons/md';
import '@app/ui/navbar.css';
import { useState} from 'react';


const links = [
  { path:'/about', name: 'About'},
  { path:'/portfolio', name:'Portfolio'},
  { path:'/contact', name: 'Contact'},
  { path:'/blog', name: 'Blog'},
]

export const Nav = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);

  const pathname = usePathname ();

  return (
    <nav>
      <div className="container nav__container">
        <Link href='/' 
          onClick={() => setIsNavShowing(false)}>
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={100}
            height={70}
            className="nav-logo"
          />
          Biocanopy Supplies
        </Link>
        <div className={clsx(   
           {
            'nav__links-show': isNavShowing == true,
            'nav__links': isNavShowing == false,
           })
         }>
          {
            links.map((link) => {
              return(
                <Link 
                  key = {link.name}
                  href = {link.path}
                  className={clsx(
                    {'active-link': pathname === link.path,},
                  )}
                  onClick={() => setIsNavShowing(prev => !prev)}
                  > {link.name} 
                </Link>
              )
            })
          }
        </div>       
        <button className="nav__toggle-btn" onClick={() => setIsNavShowing(prev => !prev)}>
          {
            isNavShowing ? <MdOutlineClose /> : <FaBars />
          }
        </button>
        
      </div>
    </nav>
  )
}
