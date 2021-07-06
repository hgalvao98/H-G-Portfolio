import React, {useState} from 'react'
import { HeaderMain, Headers, Name, SideBarIcon } from './Styled'
import DehazeIcon from '@material-ui/icons/Dehaze';
import * as AiIcons from 'react-icons/ai'
import {Link, useHistory} from 'react-router-dom'
import { SideBarData } from './SideBarData/SideBarData';
import './Header.css';
import { IconContext } from 'react-icons';
import {goToHomePage} from '../../routes/coordinator'

export default function Header() {
const history = useHistory()

const [sidebar, setSidebar] = useState(false)

const showSidebar = () => setSidebar(!sidebar)

    return (
        <IconContext.Provider value={{color: '#fff'}}>
        <HeaderMain>
            <Headers>
                <Name onClick={()=>goToHomePage(history)}>
                    <h1>Henrique Galvão</h1>
                </Name>
                <SideBarIcon>
                    <DehazeIcon onClick={showSidebar} fontSize="large"></DehazeIcon>
                </SideBarIcon>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <li className='navbar-toggle'>
                            <Link to="#" className='menu-bars'>
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>
                        {SideBarData.map((item, index) =>{ 
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </Headers>
        </HeaderMain>
        </IconContext.Provider>
    )
}