import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Header.css'

function Header() {

  const navigate = useNavigate()

  const eventList = () => {
    navigate('/')
  }

  return (
    <div className='header'>
        <div className='headerContent' onClick={eventList}> EVENTIFY </div>
    </div>
  )
}

export default Header
