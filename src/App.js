import './App.css'
import { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router'
import { Provider } from 'react-redux'

import store from './store'

// ==============================================
// BRING IN COMPOENENTS 
// ==============================================
// LAYOUT 
import Header from './components/layout/Header'

// DASHBOARD 
import Dashboard from './components/dashboard/Dashboard'

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Header/>
        <Dashboard />
      </Provider>
    </div>
  )
}

export default App
