import './SideMenu.css'
import { createElement, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

//Icons
import { IoIosArrowForward } from "react-icons/io"
import { IoIosArrowDown } from "react-icons/io";
import { FaExternalLinkAlt } from "react-icons/fa";

const SideMenu = () => {

    const [style1, setStyle1] = useState({ visibility: 'hidden', position: "absolute" })
    const [isActive1, setIsActive1] = useState(false)
    const [icon1, setIcon1] = useState(<IoIosArrowForward className='icon-side'/>)

    const [style2, setStyle2] = useState({ visibility: 'hidden', position: "absolute" })
    const [isActive2, setIsActive2] = useState(false)
    const [icon2, setIcon2] = useState(<IoIosArrowForward className='icon-side'/>)

    const [style3, setStyle3] = useState({ visibility: 'hidden', position: "absolute" })
    const [isActive3, setIsActive3] = useState(false)
    const [icon3, setIcon3] = useState(<IoIosArrowForward className='icon-side'/>)
    

    useEffect(() => {

        if(isActive1) {
            setStyle1({visibility: "visible", position: "relative"})
            setIcon1(<IoIosArrowDown className='icon-side'/>)
        } else {
            setStyle1({ visibility: 'hidden', position: "absolute" })
            setIcon1(<IoIosArrowForward  className='icon-side'/>)
        }

        if(isActive2) {
            setStyle2({visibility: "visible", position: "relative"})
            setIcon2(<IoIosArrowDown className='icon-side'/>)
        } else {
            setStyle2({ visibility: 'hidden', position: "absolute" })
            setIcon2(<IoIosArrowForward  className='icon-side'/>)
        } 

        if(isActive3) {
            setStyle3({visibility: "visible", position: "relative"})
            setIcon3(<IoIosArrowDown className='icon-side'/>)
        } else {
            setStyle3({ visibility: 'hidden', position: "absolute" })
            setIcon3(<IoIosArrowForward  className='icon-side'/>)
        } 

    }, [isActive1, isActive2, isActive3]) 


    const onClick1 = () => {
        setIsActive1(!isActive1)
    }

    const onClick2 = () => {
        setIsActive2(!isActive2)
    }
    const onClick3 = () => {
        setIsActive3(!isActive3)
    }

    return (
        <aside className='side-menu'>
            <div className='menu-links'>
                <h4>
                    LINKS
                </h4>
                <a href='https://manut.trabalhabrasil.com.br/'>
                    <FaExternalLinkAlt className='icon-side'/>Manut 1.0
                </a>
                <a href='#'>
                    <FaExternalLinkAlt className='icon-side'/>Manut 2.0
                </a>
                <a href='#'>
                    <FaExternalLinkAlt className='icon-side'/>Reports BNE
                </a>
            </div>
            <div>
                <h4>
                    DOCUMENTAÇÃO
                </h4>

                <div>
                    <button onClick={onClick1} className='menu-button'>
                        <span>
                            {icon1}Manut 1.0
                        </span>
                    </button>
                    <ul style={style1}>
                        <li>
                            <Link to="/manut1.0">
                                Vagas
                            </Link>
                        </li>
                        <li>
                            Theo
                        </li>
                    </ul>
                </div>

                <div>
                    <button onClick={onClick2} className='menu-button'>
                        <span>
                            {icon2}Manut 2.0
                        </span>
                    </button>
                    <ul style={style2}>
                        <li>
                            Login
                        </li>
                        <li>
                            Vagas
                        </li>
                    </ul>
                </div>

                <div>
                    <button onClick={onClick3} className='menu-button'>
                        <span>
                            {icon3}Reports BNE
                        </span>
                    </button>
                    <ul style={style3}>
                        <li>
                            <Link to="/reportsBNE/sobre">
                                Sobre
                            </Link>
                        </li>
                        <li>
                            Theo
                        </li>
                    </ul>
                </div>
            </div>

            
        </aside>
    )
}

export default SideMenu