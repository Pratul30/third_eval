import React from 'react'
import { useLocation } from 'react-router-dom'
import EventForDetails from '../../components/EventForDetails/EventForDetails'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './EventDetails.css'


function EventDetails() {

  const location = useLocation();

  const event = location.state.event
  console.log(event)

  return (
    <div>
      <Header />
      <div className='eventDetailsPage'>
        <EventForDetails event={event} />
      </div>
      <Footer />
    </div>
  )
}

export default EventDetails
