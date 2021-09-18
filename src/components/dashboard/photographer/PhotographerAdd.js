import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addPhotographer } from '../../../actions/photographers'

export class PhotographerAdd extends Component {
  state = {
    photographer_name: '', 
    photographer_location: '', 
    photographer_instagram_handle: '', 
    insta_followers: '', 
    mutual_models: '', 
    outreach: '', 
    outreach_date: '', 
    agencies_work_with: '', 
    notes: '', 
  }

  static propTypes = {
    addPhotographer: PropTypes.func.isRequired
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value})

  onSubmit = e => {
    e.preventDefault()
    const { photographer_name, photographer_location, photographer_instagram_handle, insta_followers, mutual_models, outreach, outreach_date, agencies_work_with, notes } = this.state
    const photographer = { photographer_name, photographer_location, photographer_instagram_handle, insta_followers, mutual_models, outreach, outreach_date, agencies_work_with, notes }
    this.props.addPhotographer(photographer)
    this.setState({
      photographer_name: '', 
      photographer_location: '', 
      photographer_instagram_handle: '', 
      insta_followers: '', 
      mutual_models: '', 
      outreach: '', 
      outreach_date: '', 
      agencies_work_with: '', 
      notes: '', 
    })
  }

  render() {
    const { photographer_name, photographer_location, photographer_instagram_handle, insta_followers, mutual_models, outreach, outreach_date, agencies_work_with, notes } = this.state
    return (
      <section className="photographer-add">
        <h2>Add A Photographer</h2>
        <form className="form" onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="photographer_name">Photographer Name</label>
            <input type="text" name="photographer_name" onChange={this.onChange} value={photographer_name} />
          </div>
          <div className="form-group">
            <label htmlFor="photographer_location">Location</label>
            <input type="text" name="photographer_location" onChange={this.onChange} value={photographer_location} />
          </div>
          <div className="form-group">
            <label htmlFor="photographer_instagram_handle">Photographers Insta Handle</label>
            <input type="text" name="photographer_instagram_handle" onChange={this.onChange} value={photographer_instagram_handle} />
          </div>
          <div className="form-group">
            <label htmlFor="insta_followers">Photographers Insta Followers</label>
            <input type="text" name="insta_followers" onChange={this.onChange} value={insta_followers} />
          </div>
          <div className="form-group">
            <label htmlFor="mutual_models">Other Models That Have Worked With Them</label>
            <input type="text" name="mutual_models" onChange={this.onChange} value={mutual_models} />
          </div>
          <div className="form-group">
            <label htmlFor="outreach">Have You Reached Out To This Photographer?</label>
            <select name="outreach" onChange={this.onChange} value={outreach}>
              <option value="" disabled>Choose an Option</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Couldn't find information">Couldn't find information</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="outreach_date">If so, when?</label>
            <input type="date" name="outreach_date" onChange={this.onChange} value={outreach_date} />
          </div>
          <div className="form-group">
            <label htmlFor="agencies_work_with">Agency They Work With</label>
            <input type="text" name="agencies_work_with" onChange={this.onChange} value={agencies_work_with} />
          </div>
          <div className="form-group">
            <label htmlFor="notes">Notes:</label>
            <textarea name="notes" cols="30" rows="10" onChange={this.onChange} value={notes}></textarea>
          </div>
          <div className="form-group">
            <button type="submit">
              Add Photographer
            </button>
          </div>
        </form>
      </section>
    )
  }
}

export default connect(null, { addPhotographer })(PhotographerAdd)
