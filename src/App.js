import './App.css';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';

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
      <Header/>
      <Dashboard />
    </div>
  )
}

export default App
