import React from "react"
import "./About.css"

const AboutCard = () => {
  return (
    <>
      <div className='aboutCard mtop flex_space'>
        <div className='row row1'>
          <h2>Armada & Layanan</h2>
          <h1>
            Kami <span>Menyediakan</span> Lokasi Untuk Destinasi Anda
          </h1>
          <p>
            Nikmati perjalanan wisata Anda bersama kami dengan armada bus pariwisata modern,
            ber-AC, dan dilengkapi berbagai fasilitas untuk kenyamanan selama di perjalanan.
          </p>
          <p>
            Dengan sopir berpengalaman dan pelayanan profesional, kami siap mengantarkan Anda ke
            berbagai destinasi wisata terbaik dengan aman, nyaman, dan tepat waktu.
          </p><button className='secondary-btn'>
            Selengkapnya <i className='fas fa-long-arrow-alt-right'></i>
          </button>
        </div>
        <div className='rowimage'>
          <img src='/images/MicrosoftTeams-image.png' alt='' />
        </div>
      </div>
    </>
  )
}

export default AboutCard
