import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import FilterSearchBar from '../../components/FilterSearchBar/FilterSearchBar'

import './EventList.css'
import FilterContent from '../../components/FilterContent/FilterContent'
import Shelf from '../../components/Shelf/Shelf'

function EventList() {


  const [filterState, setFilterState] = useState(false)

  const displayFilter = filterState ? '' : 'none'

  return (
    <div className='eventList'>
      <Header />
      <div className='eventListBodyWrapper'>
        <div className='eventListBody'>
          <FilterSearchBar filterState={filterState} setFilterState={setFilterState} />
          <div style={{ display: `${displayFilter}` }}>
            <FilterContent />
          </div>
          <div>
            <Shelf />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default EventList
