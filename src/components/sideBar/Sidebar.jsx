import React from 'react'
import './Sidebar.css'
import { CiHome } from "react-icons/ci";
import { IoMdPerson } from "react-icons/io";
import { FaBriefcase } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa6";




const Sidebar = () => {

    const sideBarIcon = [
        {
            id: 1,
            icon: <CiHome className='sidebar-list-iconss' />,
            link: '#Home'
        },
        {
            id: 2,
            icon: <IoMdPerson />,
            link: '#About Me'
        },
        {
            id: 3,
            icon: <FaBriefcase />,
            link: '#Experience'
        },
        {
            id: 4,
            icon: <FaGraduationCap />,
            link: '#Jobs'
        },
        {
            id: 5,
            icon: <IoMdPerson />,
            link: '#Services'
        },
        {
            id: 6,
            icon: <IoMdPerson />,
            link: '#Services'
        },
        {
            id: 7,
            icon: <IoMdPerson />,
            link: '#Services'
        },

    ]

    const currYear = new Date().getFullYear();

    console.log(currYear, "NAYA SAAAL")


    sideBarIcon.pop()

    return (
        <aside className='sidebar'>
            {/* LOGO */}

            <h1 className='sidebar-logo'>B
                <span className='sidebar-logo-fullstop'>.</span>
            </h1>

            {/* SIDEBAR ICONS */}

            <ul className='sidebar-list'>
                {sideBarIcon.map((item) => {
                    return (
                        <a href={item.link} key={item.id} className='sidebar-list-a'>
                            <li className='sidebar-list-iconss'>{item.icon}</li>
                        </a>
                    )
                })}
            </ul>


            <div className='sidebar-dates'>
                <span>2022</span>
                <span>-</span>
                <span>{currYear}</span>
            </div>

        </aside>
    )
}

export default Sidebar















