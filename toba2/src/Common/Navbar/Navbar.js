import React, { useState } from "react"
import "./Navbar.css"
import { Link, useNavigate } from "react-router-dom"

const Navbar = () => {
  const [click, setClick] = useState(false)
  const navigate = useNavigate();

  // 1. Logika untuk mengecek status login dan mengambil data user
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const userData = JSON.parse(localStorage.getItem("userData"));
  const userName = userData ? userData.name : "User";

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  // 2. Fungsi Logout untuk menghapus data dari storage
  const handleLogout = () => {
    localStorage.clear(); // Menghapus isLoggedIn dan userData
    alert("Anda telah logout.");
    navigate("/sign-in");
    window.location.reload(); // Refresh agar navbar terupdate
  }

  const handleOrderClick = (e) => {
    e.preventDefault();
    closeMobileMenu();

    if (isLoggedIn) {
      navigate('/ordertiket');
    } else {
      alert("Anda harus login terlebih dahulu!");
      navigate('/sign-in');
    }
  }

  return (
    <>
      <nav className='navbar'>
        <div className='container flex_space'>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? "fas fa-times" : " fas fa-bars"}></i>
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li><Link to='/' onClick={closeMobileMenu}><b>Home</b></Link></li>
            <li><Link to='/gallery' onClick={closeMobileMenu}><b>Gallery</b></Link></li>
            <li><Link to='/testimonial' onClick={closeMobileMenu}><b>Testimonial</b></Link></li>
            <li><Link to='/about' onClick={closeMobileMenu}><b>About us</b></Link></li>
            <li><Link to='/contact' onClick={closeMobileMenu}><b>Contact Us</b></Link></li>
            <li><Link to='/ordertiket' onClick={handleOrderClick}><b>Order Tickets</b></Link></li>
          </ul>

          {/* 3. BAGIAN YANG DIROMBAK: LOGIN AREA */}
          <div className='login-area flex'>
            {isLoggedIn ? (
              // TAMPILAN JIKA SUDAH LOGIN
              <>
                <li className='user-profile'>
                  <span>Hallo, <b>{userName}</b></span>
                  <i className='fas fa-user-circle user-icon-main '></i>
                </li>
                <li>
                  <button onClick={handleLogout} className='primary-btn' style={{ background: "#ff4d4d", marginLeft: "10px" }}>
                    <b>Logout</b>
                  </button>
                </li>
              </>
            ) : (
              // TAMPILAN JIKA BELUM LOGIN
              <>
                <li>
                  <Link to='/register'>
                    <i className='far fa-chevron-right'></i><b>Register</b>
                  </Link>
                </li>
                <li>
                  <Link to='/sign-in'>
                    <i className='far fa-chevron-right'></i><b>Sign in</b>
                  </Link>
                </li>
                <li>
                  <Link to='/contact'>
                    <button className='primary-btn'><b>Request a Quote</b></button>
                  </Link>
                </li>
              </>
            )}
          </div>
        </div>
      </nav>

      <header>
        <div className='container flex_space '>
          <div className='logo'>
            <img src='images/logobus.png' alt='' />
          </div>

          <div className='contact flex_space '>
            <div className='box flex_space'>
              <div className='icons'><i className='fal fa-clock'></i></div>
              <div className='text'>
                <h4>Working Hours</h4>
                <Link to='/contact'>Monday - Sunday: 9.00am to 6.00pm</Link>
              </div>
            </div>
            <div className='box flex_space'>
              <div className='icons'><i className='fas fa-phone-volume'></i></div>
              <div className='text'>
                <h4>Call Us</h4>
                <Link to='/contact'>+011 123 4567</Link>
              </div>
            </div>
            <div className='box flex_space'>
              <div className='icons'><i className='far fa-envelope'></i></div>
              <div className='text'>
                <h4>Mail Us</h4>
                <Link to='/contact'>info@exampal.com</Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar