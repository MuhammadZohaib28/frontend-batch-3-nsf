import React from 'react'
import './Sidebar.css'
import { CiHome } from "react-icons/ci";
import { IoMdPerson } from "react-icons/io";


const Sidebar = () => {

    const sideBarIcon = [
        {
            icon: <CiHome />,
            link: '#Home'
        },
        {
            icon: <IoMdPerson />,
            link: '#About Me'
        }
    ]


    sideBarIcon.pop()

    return (
        <aside>
            {/* LOGO */}

            <h1>B.</h1>

            {/* SIDEBAR ICONS */}

            <ul>
                {sideBarIcon.map((item, index) => {
                    return (
                        <a href={item.link}>
                            <li key={index} >
                                {item.icon}
                            </li>
                        </a>

                    )
                })}
            </ul>

        </aside>
    )
}

export default Sidebar
