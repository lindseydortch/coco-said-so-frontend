import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getPhotographers, deletePhotographer } from '../../../actions/photographers'

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
              <p>{photographer.photographer_name}</p>
              <p>{photographer.photographer_location}</p>
              <p>{photographer.photographer_instagram_handle}</p>
              <p>{photographer.insta_followers}</p>
              <p>{photographer.mutual_models}</p>
              <p>{photographer.outreach}</p>
              <p>{photographer.outreach_date}</p>
              <p>{photographer.agencies_work_with}</p>
              <p>{photographer.notes}</p>
            </div>
          ))
        }
      </section>
    )
  }
}

const mapStateToProps = state => ({
  photographers: state.photographers.photographers
})

export default connect(mapStateToProps, { getPhotographers, deletePhotographer })(Photographers)