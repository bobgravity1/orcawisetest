import React from 'react'
import '../sass/Input.scss'



const Input = ({icon, children, label}) => {
  return (
    <div className='input-main-container'>
    <label className='input-main-text-label'>{label}</label>
    <div className='input-main-logo-container'>
    <input className='x input-main'/>
    <div className='input-icon'>{icon}</div>

    </div>
    </div>
  )
}

export default Input
