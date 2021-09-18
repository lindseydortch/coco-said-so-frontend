import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addAgency } from '../../../actions/agencies'

export class AgencyAdd extends Component {
  state = {
    agency_name: '',
    location: '',
    agency_instagram_handle: '',
    insta_followers: '', 
    digitals_required: '', 
    digitals_requirements: '', 
    outreach: '', 
    date_digitals_submitted: '', 
    notes: '', 
  }

  static propTypes = {
    addAgency: PropTypes.func.isRequired
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value})

  onSubmit = e => {
    e.preventDefault()
    const { agency_name, location, agency_instagram_handle, insta_followers, digitals_required, digitals_requirements, outreach, date_digitals_submitted, notes } = this.state
    const agency = { agency_name, location, agency_instagram_handle, insta_followers, digitals_required, digitals_requirements, outreach, date_digitals_submitted, notes }
    this.props.addAgency(agency)
    // this.setState({
    //   agency_name: '',
    //   location: '',
    //   agency_instagram_handle: '',
    //   insta_followers: '', 
    //   digitals_required: '', 
    //   digitals_requirements: '', 
    //   outreach: '', 
    //   date_digitals_submitted: '', 
    //   notes: '', 
    // })
  }

  render() {
    const { agency_name, location, agency_instagram_handle, insta_followers, digitals_required, digitals_requirements, outreach, date_digitals_submitted, notes } = this.state
    return (
      <section className="agency-add">
        <h2>Add An Agency</h2>
        <form className="form form-background-orange" onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="agency_name">Agency Name</label>
            <input type="text" name="agency_name" onChange={this.onChange} value={agency_name} />
          </div>
          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input type="text" name="location" onChange={this.onChange} value={location} />
          </div>
          <div className="form-group">
            <label htmlFor="agency_instagram_handle">Instagram Handle</label>
            <input type="text" name="agency_instagram_handle" onChange={this.onChange} value={agency_instagram_handle} />
          </div>
          <div className="form-group">
            <label htmlFor="insta_followers">Instagram Follower Count</label>
            <input type="text" name="insta_followers" onChange={this.onChange} value={insta_followers} />
          </div>
          <div className="form-group">
            <label htmlFor="digitals_required">Do they require Digitals?</label>
            <select name="digitals_required" onChange={this.onChange} value={digitals_required}>
              <option value="" disabled>Choose an Option</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Couldn't find information">Couldn't find information</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="digitals_requirements">If so, put requirements here:</label>
              <input type="text" name="digitals_requirements" onChange={this.onChange} value={digitals_requirements} />
          </div>
          <div className="form-group">
            <label htmlFor="outreach">Have You Reached Out To This Agency?</label>
            <select name="outreach" onChange={this.onChange} value={outreach}>
              <option value="" disabled>Choose an Option</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Couldn't find information">Couldn't find information</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="date_digitals_submitted">If so, when?</label>
            <input type="date" name="date_digitals_submitted" onChange={this.onChange} value={date_digitals_submitted}/>
          </div>
          <div className="form-group">
            <label htmlFor="notes">Notes:</label>
            <textarea name="notes" cols="30" rows="10" onChange={this.onChange} value={notes}></textarea>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-yellow-light btn-mg-small">
              Add Agency
            </button>
          </div>
        </form>
      </section>
    )
  }
}

export default connect(null, { addAgency })(AgencyAdd)
