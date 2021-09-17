import React, { Component } from 'react'
import Agencies from './agency/Agencies'
import Photographers from './photographer/Photographers'
import Goals from './goals/Goals'

export class Dashboard extends Component {
  render() {
    return (
      <div>
        <h1>Agency</h1>
        <Agencies />
        <Photographers />
        <Goals />
      </div>
    )
  }
}

export default Dashboard
