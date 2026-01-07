import React from "react"
import "./About.css"
import AboutCard from "./AboutCard"
import HeadTitle from "../../Common/HeadTitle/HeadTitle"

const About = () => {
  return (
    <>
      <HeadTitle />

      <section className='about top'>
        <div className='container'>
          <AboutCard />
        </div>
      </section>

      <section className='features top'>
        <div className='container aboutCard flex_space'>
          <div className='row row1'>
            <h1>
              Our <span>Team</span>
            </h1>
            <p>Bokbus Pariwisata adalah perusahaan bus yang didirikan oleh 3 sekawan pada tahun 2025. 3 sekawan tersebut memiliki julukan sebagai THE CREW karena mereka memiliki peran masing masing yang tak kalah penting.</p>
            <p>Tujuan didirikan nya Bokbus Pariwisata adalah ingin memberikan rasa nyaman, aman, dan berkesan selama dalam perjalanan, mengantarkan pelanggan ke berbagai destinasi wisata dengan selamat.</p>
          </div>
          <div className='row image'>
            <img src='images/feature-img-1.jpg' alt='' />
            <div className='control-btn'>
              <button className='prev'>
                <i className='fas fa-play'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
