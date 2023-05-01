import React, { useContext, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import AppRouter from './components/AppRouter'
import Loader from './components/Loader'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Context } from '.'

const App = () => {
  const { auth } = useContext(Context)
  const [user, loading, error] = useAuthState(auth)


   if (loading) {
    return <Loader />
  }
  
 

  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
      
    </BrowserRouter>
  )
}

export default App
