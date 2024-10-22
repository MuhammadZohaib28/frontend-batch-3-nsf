import React from 'react'
import './Services.css'
import cardpicture1 from '../../images/cardpic.jpg'

const Services = () => {
  const servicesCards = [
    {
      image: cardpicture1,
      title: "UI/UX Design",
      description: "I can design beautiful user interfaces and user experiences for your website or mobile application.",
      bgColor: '#FFE700'

    },
    {
      image: "dummy image",
      title: "Web Development",
      description: "I can design beautiful user interfaces and user experiences for your website or mobile application.",
      bgColor: "#0D92F4"
    },
    {
      image: "dummy image",
      title: "Photography",
      description: "I can design beautiful user interfaces and user experiences for your website or mobile application.",
      bgColor: "#FF4D4D"
    }
  ]
  return (
    <div className='services'>
      <h1>Services</h1>



      <div className='services-cardsection'>

        {servicesCards.map((card, index) => {
          return (
            <div style={{ backgroundColor: card.bgColor }} key={index} className='services-singlecard'>
              <div className='image-wrapper'>
                <img src={card.image} alt={card.title}
                  className='image' />

              </div>

              <h1>{card.title}</h1>

              <p>{card.description}</p>

            </div>
          )
        })}



      </div>
    </div>
  )
}

export default Services
