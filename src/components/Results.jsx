
import React, {useEffect} from 'react'
import { useResultsContext } from '../Contexts/DataResultContext'
import { useLocation } from 'react-router-dom'

import { Loading } from './Loading'
import { Search } from './Search'

export const Results = () => {

  const [fetchResultsData, isLoading, setIsLoading, results, setResults, search, setSearch] = useResultsContext()
  const location = useLocation()

  useEffect(() => {
    if(location.pathname == "/continentData"){
      fetchResultsData("/continentData")
    } else if (location.pathname == "/totalData"){
      fetchResultsData("/totalData")
    } else if(location.pathname == "/countriesData"){
      fetchResultsData("/countriesData")
    }
  }, [])



  

  if(isLoading){
    return <Loading />
  }

  switch (location.pathname) {

      case '/totalData':
        return (
          <div className=''>
            <p>{results.totalCases}</p>
            <p>{results.totalDeaths}</p>
            <p>{results.totalRecovered}</p>
          </div>
        )

      case '/continentData':
        return (
          <div className='flex flex-wrap gap-8 text-center items-center justify-center py-10'>
            {results?.map((result, key) => (
              <div key={key} className='flex flex-col gap-2 bg-white p-3 rounded-lg border-b-4 border-blue-400 dark:border-orange-300'>
                <h1 className='text-blue-400 font-bold text-2xl mb-2 dark:text-orange-300'>{result.continent}</h1>
                <div className=''>
                  <p>Total Cases : <span className='text-blue-400 dark:text-orange-300'>{result.totalCases}</span></p>
                  <p>Total Deaths : <span className='text-red-500'>{result.totalDeaths}</span></p>
                  <p>Total Recovered : <span className='text-blue-400 dark:text-orange-300'>{result.totalRecovered}</span></p>
                </div>
              </div>
            ))}
          </div>
        )

      case '/countriesData':
          return (
            
            <div className='text-center py-4'>
              <Search />
              <div className='flex flex-wrap gap-10 text-center items-center justify-center py-10'>
                {results?.map((result, key) => (
                  <div className='bg-white p-4 rounded-lg border-b-4 border-blue-400 dark:border-orange-300' key={key}>
                    <div className='flex flex-col gap-2 '>
                      <h1 className='text-2xl font-bold text-blue-400 dark:text-orange-300'>{result.country}</h1>
                      <div className=''>
                        <p>Total cases : <span className='text-blue-400 dark:text-orange-300'>{result.totalCases == "" ? 'Not found' : result.totalCases}</span></p>
                        <p>Total deaths : <span className='text-red-500'>{result.totalDeaths == "" ? 'Not found' : result.totalDeaths}</span></p>
                        <p>Total recovered : <span className='text-blue-400 dark:text-orange-300'>{result.totalRecovered == "N/A" ? 'Not found' : result.totalRecovered}</span></p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
      
      
  
    default:
      return 'ERROR !'
  }
}
