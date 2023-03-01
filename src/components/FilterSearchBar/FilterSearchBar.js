import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import './FilterSearchBar.css'

function FilterSearchBar(props) {

  const {filterState} = props
  const {setFilterState} = props

  const setFilter = () => {
    setFilterState(!filterState)
  }

  return (
    <div className='filterSearchBar'>
          <div className='filter'>
            <FontAwesomeIcon icon={faFilter} style={{padding: ' 0 5px'}} />
            FILTER
            {
             filterState ? <FontAwesomeIcon icon={faChevronUp} style={{padding: ' 0 5px'}} onClick = {setFilter} /> : <FontAwesomeIcon icon={faChevronDown} style={{padding: ' 0 5px'}} onClick = {setFilter} />
            } 
          </div>
          <div className='search'>
            <input placeholder='EVENT NAME' className='input'/>
            <FontAwesomeIcon icon={faMagnifyingGlass} style={{padding: ' 0 5px '}} />
          </div>
        </div>
  )
}

export default FilterSearchBar
