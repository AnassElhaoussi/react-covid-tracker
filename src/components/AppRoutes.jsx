
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Results } from './Results'
import { Navigate } from 'react-router-dom'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/totalData' element={<Results />} >

      </Route>
      <Route path='/countriesData' element={<Results />} >

      </Route>
      <Route path='/continentData' element={<Results />} >

      </Route>
      <Route path='/' element={<Navigate to='/totalData' />} >

      </Route>
    </Routes>
  )
}
