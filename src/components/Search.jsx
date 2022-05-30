
import React, {useState, useEffect} from 'react'
import { useResultsContext } from '../Contexts/DataResultContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";



export const Search = () => {
    const [fetchResultsData, isLoading, setIsLoading, results, setResults, search, setSearch] = useResultsContext()

    

    const filterSearchResults = results?.filter(result => {
        return result.country.toLowerCase().includes(search.toLowerCase())
    })

    const getSearchResults = () => {
        setResults(filterSearchResults)
    }
 

  return (
    <div className='flex gap-3 items-center justify-center'>
        <input 
        type="text" 
        placeholder='Search for your country..' 
        className='px-8 py-1 rounded outline-none'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        
        />

        <FontAwesomeIcon 
        className='text-blue-400' 
        icon={faCircleCheck} 
        onClick={() => getSearchResults()}
       
        />
    </div>
  )
}
