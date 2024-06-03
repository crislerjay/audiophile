import { Link } from 'react-router-dom'
import logo from '../assets/images/shared/desktop/logo.svg'
import fb from '../assets/images/shared/desktop/icon-facebook.svg'
import twitter from '../assets/images/shared/desktop/icon-twitter.svg'
import ig from '../assets/images/shared/desktop/icon-instagram.svg'

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <p className="logo"><img src={logo} alt="audiophile logo" /></p>
        <ul className="nav-links">
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/category/headphones">HEADPHONES</Link></li>
          <li><Link to="/category/speakers">SPEAKERS</Link></li>
          <li><Link to="/category/earphones">EARPHONES</Link></li>
        </ul>
        <p className="about text-gray text-02">Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
        <p className="text-gray text-02 copyright">Copyright 2024. All Rights Reserved</p>
        <ul className="socal-links">
          <li><Link to="https://www.facebook.com/" target='_blank'><img src={fb} alt="facebook icon" /></Link></li>
          <li><Link to="https://twitter.com" target='_blank'><img src={twitter} alt="twitter icon" /></Link></li>
          <li><Link to="https://www.instagram.com/" target='_blank'><img src={ig} alt="instagram icon" /></Link></li>
        </ul>
      </div>
    </div>
  )
}
