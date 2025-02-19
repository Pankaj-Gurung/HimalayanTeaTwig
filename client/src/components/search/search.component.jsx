import React from 'react'
import './search.scss'

const Search = (props) => {

  const {placeholder} = props
  return (
    <main className='search-container'>
        <input type="search" name="" id="" placeholder = {placeholder} /> 
    </main>
  )
}

export default Search