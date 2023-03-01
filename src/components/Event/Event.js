import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import { faBookmark as faRegularBookmark } from '@fortawesome/free-regular-svg-icons'
import moment from 'moment-timezone'
import './Event.css'
import makeRequest from '../../utils/makeRequest/makeRequest'
import { UPDATE_EVENT } from '../../constants/apiEndpoints'

function Event({ event, isDetails }) {

    const time = moment(event.datetime);
    const dateTime = time.tz(event.timezone).format("DD MMM YYYY HH:mm z");

    const [bookmarkState, setBookmarkState] = useState(event.isBookmarked)

    const navigate = useNavigate()

    const handleBookmark = () => {
        makeRequest(UPDATE_EVENT(event.id), {
            data: {
                isBookmarked: !bookmarkState
            }
        }, navigate).then(() => {
            setBookmarkState(!bookmarkState)
        })
    }

    const navigateToDetails = () => {
        navigate('/eventdetails', {
            state: {
                event: event
            }
        })
    }

    return (
        <div className='event' onClick={navigateToDetails}>
            <img src={`${event.imgUrl}`} className="eventImage" alt="recordImage" />
            <div className='eventContent'>
                <div className='eventNameDescription'>
                    <div className='eventTitle'>{event.name}</div>
                    <div className='eventDescription'>{event.description}</div>
                    <br />
                    <div className='venue'><b> VENUE: </b>{event.venue}</div>
                    <div className='date'><b>DATE: </b>{dateTime}</div>
                </div>
                <div className='reactions'>
                    <div className='leftReaction' style={{ display: `${event.isRegistered ? '' : 'none'}` }}>
                        <FontAwesomeIcon icon={faCircleCheck} style={{ padding: ' 0 5px' }} />
                        REGISTERED
                    </div>
                    <div className='rightReaction' style={{ color: 'red' }}>
                        {
                            bookmarkState ? <FontAwesomeIcon icon={faBookmark} style={{ padding: ' 0 5px' }} onClick={handleBookmark} /> : <FontAwesomeIcon icon={faRegularBookmark} style={{ padding: ' 0 5px' }} onClick={handleBookmark} />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Event
