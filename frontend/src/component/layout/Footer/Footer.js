import React from 'react'
import './Footer.css'
import playStore from '../../../images/playstore.png'
import appStore from '../../../images/Appstore.png'

const Footer = () => {
  return (
    <footer id="footer">
        <div className="leftFooter">
            <h4>DOWNLOAD OUR APP</h4>
            <p>Download App for Android and IOS mobile phone</p>
            <img src={playStore} alt="playstore" />
            <img src={appStore} alt="Appstore" />
        </div>
        <div className="midFooter">
            <h1>ECOMMERCE.</h1>
            <p>High Quality is our first priority</p>

            <p>Copyrights 2022 &copy; MeShivamKushwaha</p>
        </div>
        <div className="rightFooter">
        <h4>Follow Us</h4>
            <a target="_blank" href="https://www.instagram.com/risky_gryphon/" rel="noopener noreferrer">Instagram</a>
            <a target="_blank" href="https://www.youtube.com/channel/UCHYqb7brOzKU-oDdW1NTNqw" rel="noopener noreferrer">Youtube</a>
            <a target="_blank" href="https://www.instagram.com/risky_gryphon/" rel="noopener noreferrer">Facebook</a>
        </div>
    </footer>
  )
}

export default Footer