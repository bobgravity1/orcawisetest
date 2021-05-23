import React from 'react'
import '../sass/TopPanel.scss'
import Input from './Input.js'
import { GoChevronDown } from "react-icons/go";
import { BiSearch } from "react-icons/bi";


const TopPanel = () => {
  return (
    <div className='panel-top-container'>
    <div className='panel-top-main'>
    <div className='panel-top-input-container'>
  <Input icon={<GoChevronDown />} label={'Search By Entities'}/>
    <Input icon={<BiSearch />} label={'Filter By Smart String'}/>
    </div>
    </div>
    </div>
  )
}

export default TopPanel
