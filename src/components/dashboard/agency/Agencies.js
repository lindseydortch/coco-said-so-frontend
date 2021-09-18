import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getAgencies, deleteAgency } from '../../../actions/agencies'

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
        {
          this.props.agencies.map(agency => (
            <div className="card" key={agency.id}>
              <p>{agency.agency_name}</p>
              <p>{agency.location}</p>
              <p>{agency.agency_instagram_handle}</p>
              <p>{agency.insta_followers}</p>
              <p>{agency.digitals_required}</p>
              <p>{agency.digitals_requirements}</p>
              <p>{agency.outreach}</p>
              <p>{agency.date_digitals_submitted}</p>
              <p>{agency.notes}</p>
            </div>
          ))
        }
      </section>
    )
  }
}

const mapStateToProps = state => ({
  agencies: state.agencies.agencies
})

export default connect(mapStateToProps, { getAgencies, deleteAgency })(Agencies)

