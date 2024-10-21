import React from 'react'
import './MainSection.css'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import profilepicture from '../../images/pp.avif'




const MainSection = () => {

    const mainSectionIcons = [
        {
            icon: <FaInstagram className='mainsection-singleIcon'/>,
            link: 'https://www.instagram.com/'
        },
        {
            icon: <FaLinkedin />,
            link: 'https://www.linkedin.com/'
        },
        {
            icon: <FaGithub />,
            link: 'www.github.com'
        },
        {
            icon: <FaTwitter />,
            link: 'https://twitter.com/'
        },
        {
            icon: <FaFacebook />,
            link: 'https://www.facebook.com/'
        },
        {
            icon: <FaYoutube />,
            link: 'https://www.youtube.com/'
        }
    ]

    return (
        <div id='#Home' className='mainsection'>
            <div className='mainsection-top'>
                <div className='mainsection-top-profile-picture'>
                    <img src={profilepicture} alt='Profile Picture' />
                </div>

                <h1>Farhan Zafar</h1>


                <p>I'm Front-End Developer</p>


                <ul className='mainsection-icons'>
                    {mainSectionIcons.map((item, index) => {
                        return (
                            <a key={index} href={item.link} target='_blank'>
                                <li className='mainsection-singleIcon'>{item.icon}</li>
                            </a>
                        )
                    })}
                </ul>

                <button className='mainsection-button'>Download CV</button>


            </div>

            {/* <div className='mainsection-bottom'>
                <h1>Bottom Section</h1>
            </div> */}
        </div>
    )
}

export default MainSection


