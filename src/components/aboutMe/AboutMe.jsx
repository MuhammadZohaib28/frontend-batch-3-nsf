import React from 'react'
import './AboutMe.css'
import profilepicture from '../../images/pp.avif'

const AboutMe = () => {
  return (
    <div className='aboutme'>

      <h1>About Me</h1>

      <div className='aboutme-midsection'>

        <div className='mainsection-top-profile-picture   aboutme-midsection-picture'>
          <img src={profilepicture} />
        </div>


        <div className='aboutme-cardsection'>
          <div>
            <p className='p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptates laborum nesciunt mollitia rem nost rum accusantium, iste quo a laboriosam nulla nobis repellendus ullam quibusdam fugit, praesentium sequi iusto. Impedit.</p>

            <button>Download CV</button>
          </div>





          <div className='aboutme-bars-section'>
            <div className='aaa'>
              <h3>Development</h3>
              <span>90%</span>
            </div>

            <span  className='aboutme-cardsection-bars'></span>





            <div className='aaa'>
              <h3>UI/UX design</h3>
              <span>80%</span>


            </div>

            <span className='aboutme-cardsection-bars2'></span>


            <div className='aaa'>
              <h3>Photography</h3>
              <span>60%</span>


            </div>

            <span className='aboutme-cardsection-bars3'></span>



          </div>
        </div>

      </div>







      <div >

      </div>


    </div>
  )
}

export default AboutMe
