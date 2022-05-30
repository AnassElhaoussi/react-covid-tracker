import React, {createContext, useState} from "react";
import { useContext } from "react";

export const ResultsContext = createContext()

export const ResultsProvider = ({children}) => {

    const [isLoading, setIsLoading] = useState(false)
    const [results, setResults] = useState([])
    const [search, setSearch] = useState('')

    const fetchResultsData = async (type) => {
        setIsLoading(true)

        const response = await fetch(`https://covid-19-coronavirus-statistics2.p.rapidapi.com/${type}`, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'covid-19-coronavirus-statistics2.p.rapidapi.com',
                'X-RapidAPI-Key': '91d14f2500mshb73a98a500501c0p1a7f2djsnbec755d52b86'
            }
        })

        const data = await response.json()

        setResults(data.result)
        console.log(data.result);
        
        
        setIsLoading(false)

    }

    return (
            <ResultsContext.Provider value={[fetchResultsData ,isLoading, setIsLoading, results, setResults, search, setSearch]}>
                {children}
            </ResultsContext.Provider> 
        )
    }

export const useResultsContext = () => useContext(ResultsContext)
    