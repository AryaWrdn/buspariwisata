import React, { useState, useEffect } from "react"
import Data from "./Data"
import './Home.css'

const Home = ({ slides }) => {
  const [current, setCurrent] = useState(0)
  const length = Data.length

  // Fungsi nextSlide (tetap)
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prevCurrent =>
        prevCurrent === length - 1 ? 0 : prevCurrent + 1
      )
    }, 4000)

    return () => clearInterval(interval)
  }, [length])

  if (!Array.isArray(Data) || Data.length <= 0) {
    return null
  }

  return (
    <>
      <section className='slider'>
        <div className='control-btn'>
          <button className='prev' onClick={prevSlide}>
            <i className='fas fa-caret-left'></i>
          </button>
          <button className='next' onClick={nextSlide}>
            <i className='fas fa-caret-right'></i>
          </button>
        </div>

        {/* ↓↓↓ BAGIAN INI BERUBAH TOTAL ↓↓↓
          Kita buat 1 wrapper/pembungkus (.slide-wrapper)
          dan berikan style 'transform' untuk menggesernya.
        */}
        <div
          className='slide-wrapper'
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {/* Map SEMUA gambar, jangan pakai 'index === current' lagi */}
          {Data.map((slide, index) => {
            return (
              <div className="slide" key={index}>
                <img src={slide.image} alt='HomeImage' />
              </div>
            )
          })}
        </div>
        {/* ↑↑↑ BAGIAN INI BERUBAH TOTAL ↑↑↑ */}

      </section>

      {/* <section className='slide-form'>
        <div className='container'>
          <h1>Nikmati Liburan Mu</h1>
          <span> Search and Book Hotel</span>

          <form>
            <input type='text' placeholder='Seacrh City' />
            <div className='flex_space'>
              <input type='date' placeholder='Check In' />
              <input type='date' placeholder='Check Out' />
            </div>
            <div className='flex_space'>
              <input type='number' placeholder='Adult(s)(18+)' />
              <input type='number' placeholder='Children(0- 17)' />
            </div>
            <input type='number' placeholder='Rooms' />
            <input type='Submit' value='Search' className='submit' />
          </form>
        </div>
      </section> */}
    </>
  )
}

export default Home