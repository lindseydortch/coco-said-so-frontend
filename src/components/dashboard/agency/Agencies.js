import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getAgencies, deleteAgency, addAgency } from '../../../actions/agencies'
import AgencyAdd from './AgencyAdd'

export class Agencies extends Component {
  static propTypes = {
    agencies: PropTypes.array.isRequired,
    getAgencies: PropTypes.func.isRequired,
    deleteAgency: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.getAgencies()
  }

  render() {
    return (
      <section className="show-agencies">
        <h2>Your Agencies Tracker</h2>
        <div className="cards">
        {
          this.props.agencies.map(agency => (
            <div className="card" key={agency.id}>
              <p>Agency Name: {agency.agency_name}</p>
              <p>Location: {agency.location}</p>
              <p>Agency Instagram Handle: {agency.agency_instagram_handle}</p>
              <p>Insta Followers: {agency.insta_followers}</p>
              <p>Digitals Required: {agency.digitals_required}</p>
              <p>Digitals Requirements: {agency.digitals_requirements}</p>
              <p>Outreach: {agency.outreach}</p>
              <p>Date Digitals Submitted: {agency.date_digitals_submitted}</p>
              <p>Notes: {agency.notes}</p>
              <button onClick={this.props.deleteAgency.bind(this, agency.id)}className="btn btn-mg-small btn-orange">Delete Agency</button>
            </div>
          ))
        }
        </div>
        <AgencyAdd />
      </section>
    )
  }
}

const mapStateToProps = state => ({
  agencies: state.agencies.agencies
})

export default connect(mapStateToProps, { getAgencies, deleteAgency })(Agencies)

