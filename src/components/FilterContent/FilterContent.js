import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleDot } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-regular-svg-icons'
import './FilterContent.css'

function FilterContent() {
    return (
        <div className='filterContent'>
            <div className='filterRegister'>
                <div style={{ display: 'flex' }}>
                    <FontAwesomeIcon icon={faCircleDot} style={{ padding: ' 0 5px' }} />
                    <div style={{ fontSize: '15px' }}> ALL </div>
                </div>
                <div style={{ display: 'flex' }}>
                    <FontAwesomeIcon icon={faCircle} style={{ padding: ' 0 5px' }} />
                    <div style={{ fontSize: '15px' }}> REGISTERED </div>
                </div>
            </div>
            <div className='filterBookmark'>
                <div style={{ display: 'flex',justifyContent: 'space-between'}}>
                    <div style={{ fontSize: '15px' }}> BOOKMARKED </div>
                    <FontAwesomeIcon icon={faCircle} style={{ padding: ' 0 5px' }} />
                </div>
                <div style={{ display: 'flex' }}>
                    <div style={{ fontSize: '15px' }}> SEATS AVAILABLE </div>
                    <FontAwesomeIcon icon={faCircle} style={{ padding: ' 0 5px' }} />
                </div>
            </div>
        </div>
    )
}

export default FilterContent
