import React from 'react'
import '../sass/SidePanel.scss'
import logo from '../assets/images/logo.svg'

import { GoGraph } from "react-icons/go";
import { RiContactsBook2Line } from "react-icons/ri";
import { DiAtom } from "react-icons/di";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { VscSourceControl } from "react-icons/vsc";
import { RiBuildingLine } from "react-icons/ri";

const SidePanel = () => {
  return (
    <div className='sidepanel-container'>
    <img alt='whale' className='sidepanel-logo' src={logo} />
    <div className='sidepanel-main'>

    <ul classname='options-container'>
    <li className='options-item'><div className='options-icon'><GoGraph /></div> Graphs</li>
    <li className='options-item'><div className='options-icon'><VscSourceControl /></div>Sources</li>
    <li className='options-item'><div className='options-icon'><DiAtom /></div>Overview</li>
    <li className='options-item'><div className='options-icon'><RiContactsBook2Line /></div>Contacts</li>
    <li className='options-item'><div className='options-icon'><RiBuildingLine /></div>Companies</li>
    <li className='options-item'><div className='options-icon'><HiOutlineDocumentReport /></div>Reports</li>
    </ul>

    </div>
    </div>
  )
}

export default SidePanel
