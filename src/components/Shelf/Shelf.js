import React, { useEffect, useState } from 'react'
import makeRequest from '../../utils/makeRequest/makeRequest'
import { GET_ALL_EVENTS } from '../../constants/apiEndpoints'
import Event from '../Event/Event'
import './Shelf.css'

function Shelf() {

  const [allEvents, setAllEvents] = useState([])

  useEffect(() => {
    makeRequest(GET_ALL_EVENTS)
        .then((response) => {
          response.sort((event1, event2) => {
            return new Date(event1.datetime) - new Date(event2.datetime);
          });
            setAllEvents(response)
        })
}, [])

  return (
    <div className='shelf'>
      {
        allEvents.map((ev,index) => {
          return <Event key={index} event={ev} />
        })
      }
    </div>
  )
}

export default Shelf
