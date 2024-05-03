import Link from 'next/link';
import { FaLinkedinIn } from "react-icons/fa"
import { FaFacebookF } from "react-icons/fa"
import { AiOutlineTwitter } from "react-icons/ai"
import { AiFillInstagram } from "react-icons/ai"
import Image from "next/image"

const Footer =() => {
  return (
    <footer>
        <div className="container footer__container">
            <article>
            <Link href='/' >
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={100}
                height={70}
                className="nav-logo"
              />
                Biocanopy Supplies
            </Link>
                <div className="footer__socials">
                    <a href="https://linkedin.com/" target="_blank" rel="noreferrer noopener"><FaLinkedinIn/></a>
                    <a href="https://facebook.com/" target="_blank" rel="noreferrer noopener"><FaFacebookF/></a>
                    <a href="https://twitter.com/" target="_blank" rel="noreferrer noopener"><AiOutlineTwitter/></a>
                    <a href="https://instagram.com/" target="_blank" rel="noreferrer noopener"><AiFillInstagram/></a>
                </div>
            </article>
            <article>
                <h4>Permalinks</h4>
                <Link href="/about">About</Link>
                <Link href="/portfolio">Portifolio</Link>
                <Link href="/contact">Contact</Link>
            </article>
            <article>
                <h4>Insights</h4>
                <Link href="/s">Blog</Link>
                <Link href="/s">Case Studies</Link>
                <Link href="/s">Events</Link>
                <Link href="/s">Communities</Link>
                <Link href="/s">FAQS</Link>
            </article>
            <article>
                <h4>Get In Touch</h4>
                <Link href="/contact">Contact Us</Link>
                <Link href="/s">Support</Link>
            </article>
        </div>
        <div className="footer__copyright">
            <small>2024 BIOCANOPY LTD &copy; All Rights Reserved</small>
        </div>
    </footer>
  )
}

export default Footer