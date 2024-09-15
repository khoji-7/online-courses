import React from 'react'
import Title from '../common/title/Title.jsx'
import { homeAbout } from '../../dummydata.js'
import AWrapper from './AWrapper'
import "./about.css"

const AboutCard = () => {
  return (
    <>
      <section className='aboutHome'>
        <div className='container flexSB'>
          <div className='left row'>
            <img src="./images/about.webp" alt="About Us" />
          </div>
          <div className='right row'>
            <Title subtitle="LEARN ANYTHING" title="Benefits About Online Learning Expertise" />
            <div className="items">
            {
                homeAbout.map((val) =>(
                    <div className='item flexSB'>
                        <div className='img'>
                            <img src={val.cover} alt="" />
                        </div>
                        <div className='text'>
                            <h2>
                                {val.title}
                            </h2>
                            <h2>
                                {val.desc}
                            </h2>
                        </div>
                    </div>
                ))
            }
          </div>
          </div>
          
        </div>
      </section>
      <AWrapper/>
    </>
  )
}

export default AboutCard
