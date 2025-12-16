import React from "react"
import "./Footer.css"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid'>
          <div className='box'>
            <div className="ab">
              <h2>ABOUT US</h2> <p>Kami menyediakan armada bus pariwisata modern yang dilengkapi dengan fasilitas premium untuk menjamin kenyamanan dan keamanan Anda di setiap kilometer.</p> <br /> <p>Kami adalah pilihan ideal untuk liburan keluarga, <i>study tour</i>, kunjungan dinas, atau acara rombongan lainnya. Nikmati perjalanan yang tak terlupakan bersama kru kami yang profesional dan berpengalaman.</p></div>
          </div>

          <div className='box'>
            <div className="navi">
              <h2>NAVIGATION</h2>
              <ul>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='/about'>About us</Link>
                </li>
                <li>
                  <Link to='/gallery'>Gallery</Link>
                </li>
                <li>
                  <Link to='/testimonial'>Testimonial</Link>
                </li>
                <li>
                  <Link to='/contact'>Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className='box'>
            <div className='news'>
              <h2>NEWSLETTER</h2>
              <p>Dapatkan berita terbaru dari kami</p>
              <input type='text' name='' id='' />
              <input type='text' className='primary-btn' value='SUBSCRIBE' />
            </div>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>© 2022 Orbit By CREW.</p>
      </div>
    </>
  )
}

export default Footer
