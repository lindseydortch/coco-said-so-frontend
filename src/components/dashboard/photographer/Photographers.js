import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getPhotographers, deletePhotographer } from '../../../actions/photographers'
import PhotographerAdd from './PhotographerAdd'

export class Photographers extends Component {
  static propTypes = {
    photographers: PropTypes.array.isRequired,
    getPhotographers: PropTypes.func.isRequired,
    deletePhotographer: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.getPhotographers()
  }

  render() {
    return (
      <section className="show-photographers">
        <h2>Your Photographer Tracker</h2>
        {
          this.props.photographers.map(photographer => (
            <div className="card" key={photographer.id}>
              <p>Photographer Name: {photographer.photographer_name}</p>
              <p>Photographer Location: {photographer.photographer_location}</p>
              <p>Photographer Instagram Handle: {photographer.photographer_instagram_handle}</p>
              <p>Insta Followers: {photographer.insta_followers}</p>
              <p>Mutual Models: {photographer.mutual_models}</p>
              <p>Outreach: {photographer.outreach}</p>
              <p>Outreach Date: {photographer.outreach_date}</p>
              <p>Agencies Work With: {photographer.agencies_work_with}</p>
              <p>Notes: {photographer.notes}</p>
              <button onClick={this.props.deletePhotographer.bind(this, photographer.id)} className="btn btn-orange btn-mg-small">Delete Photographer</button>
            </div>
          ))
        }
        <PhotographerAdd />
      </section>
    )
  }
}

const mapStateToProps = state => ({
  photographers: state.photographers.photographers
})

export default connect(mapStateToProps, { getPhotographers, deletePhotographer })(Photographers)