import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import { faBookmark as faRegularBookmark } from '@fortawesome/free-regular-svg-icons'
import moment from 'moment-timezone'
import './EventForDetails.css'
import makeRequest from '../../utils/makeRequest/makeRequest'
import { UPDATE_EVENT } from '../../constants/apiEndpoints'

function Event({ event }) {

    const time = moment(event.datetime);
    const dateTime = time.tz(event.timezone).format("DD MMM YYYY HH:mm z");


    const [registerState, setRegisterState] = useState(event.isRegistered)
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

    const registerChange = () => {
        makeRequest(UPDATE_EVENT(event.id), {
            data: {
                isRegistered: !registerState
            }
        }, navigate).then(() => {
            setRegisterState(!registerState)
        })
    }

    return (
        <div className='eventDetails'>
            <img src={`${event.imgUrl}`} className="eventDetailsImage" alt="recordImage" />
            <div className='eventDetailsContent'>
                <div className='eventDetailsNameDescription'>
                    <div className='eventDetailsTitle'>{event.name}</div>
                    <div className='eventDetailsDescription'>{event.description}</div>
                    <br />
                    <div className='venueDetails'><b> VENUE: </b>{event.venue}</div>
                    <div className='dateDetails'><b>DATE: </b>{dateTime}</div>
                </div>
                <div className='reactionsDetails'>
                    <div className='leftReactionDetails' style={{ display: `${registerState ? '' : 'none'}` }}>
                        <FontAwesomeIcon icon={faCircleCheck} style={{ padding: ' 0 5px' }} />
                        REGISTERED
                    </div>
                    <div className='rightReactionDetails' style={{ color: 'red' }}>
                        {
                            bookmarkState ? <FontAwesomeIcon icon={faBookmark} style={{ padding: ' 0 5px', height: '30px' }} onClick={handleBookmark} /> : <FontAwesomeIcon icon={faRegularBookmark} style={{ padding: ' 0 5px', height: '30px'}} onClick={handleBookmark} />
                        }
                    </div>
                </div>
                <div onClick={registerChange}>
                    {
                        registerState ? <div className='registerDetails'>UNREGISTER</div> : <div className='registerDetails'>REGISTER</div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Event
