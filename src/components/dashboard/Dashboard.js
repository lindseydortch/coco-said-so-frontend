import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// ==============================================
// BRING IN COMPOENENTS 
// ==============================================
// Show 
import Agencies from './agency/Agencies'
import Photographers from './photographer/Photographers'
import Goals from './goals/Goals'

// Add
import AgencyAdd from './agency/AgencyAdd'
import PhotographerAdd from '../dashboard/photographer/PhotographerAdd'
import GoalsAdd from '../dashboard/goals/GoalsAdd'

export class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <h1>Your Dashboard</h1>
        <div className="links">
          <div className="link_container">
           
            <Link to="/agencies" >
            <img src="https://images.unsplash.com/photo-1566958799193-c2aa57a835d4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2600&q=80" alt="Agency Tracking" />
              <p>
              
              Agency Tracking
              </p>
                
            </Link>
          </div>
          <div className="link_container">
            
            <Link to="/photographers" >
              <img src="https://images.unsplash.com/photo-1495745966610-2a67f2297e5e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80" alt="Photographer List and Tracking" />
              <p>

              Photographer List and Tracking
              </p>
            </Link>
          </div>
          <div className="link_container">
            
            <Link to="/goals" >
              <img src="https://images.unsplash.com/photo-1610540604745-3e96fba9ccef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2600&q=80" alt="Goals" />
              <p>

              Goals
              </p>
            </Link>
          </div>
          

        </div>
        
        {/* <h1>Agency</h1>
        <h2>Add Form</h2>
        <AgencyAdd />
        <Agencies />
        <h2>Add Form</h2>
        <PhotographerAdd />
        <Photographers />
        <h2>Add Form</h2>
        <GoalsAdd />
        <Goals /> */}
      </div>
    )
  }
}

export default Dashboard
