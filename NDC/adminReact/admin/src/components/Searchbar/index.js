
import React from 'react'

const SearchBar = ({onSearching}) => {
  return (
    <>
        <input
        aria-label='Search Content'
        placeholder='Search....'
        id = 'search-bar'
        name= 'search-bar'
        className='p-3 border rounded border-slate-300 focus:ring-1 ring-green-200 w-56 h-10'
        onChange={(e)=>onSearching(e.target.value)}
        />
        
    
    </>
  )
}

export default SearchBar