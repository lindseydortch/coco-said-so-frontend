import React, { Component } from 'react'

// ==============================================
// BRING IN COMPOENENTS 
// ==============================================
// Show 
import Agencies from './agency/Agencies'
import Photographers from './photographer/Photographers'
import Goals from './goals/Goals'

// Add
import AgencyAdd from '../dashboard/agency/AgencyAdd'
import PhotographerAdd from '../dashboard/photographer/PhotographerAdd'
import GoalsAdd from '../dashboard/goals/GoalsAdd'

export class Dashboard extends Component {
  render() {
    return (
      <div>
        <h1>Agency</h1>
        <h2>Add Form</h2>
        <AgencyAdd />
        <Agencies />
        <h2>Add Form</h2>
        <PhotographerAdd />
        <Photographers />
        <h2>Add Form</h2>
        <GoalsAdd />
        <Goals />
      </div>
    )
  }
}

export default Dashboard
