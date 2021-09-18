import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getGoals, deleteGoal } from '../../../actions/goals'

export class Goals extends Component {
  static propTypes = {
    goals: PropTypes.array.isRequired,
    getGoals: PropTypes.func.isRequired,
    deleteGoal: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.getGoals()
  }

  render() {
    return (
      <section className="show-goals">
        <h2>Jot down your modeling goals below</h2>
        {
          this.props.goals.map(goal => (
            <div className="card" key={goal.id}>
              <p>{goal.goal}</p>
              <p>{goal.date_date}</p>
              <p>{goal.tasks_to_complete_goal}</p>
              <button onClick={this.props.deleteGoal.bind(this, goal.id)}>Goal Achieved!</button>
            </div>
          ))
        }
      </section>
    )
  }
}

const mapStateToProps = state => ({
  goals: state.goals.goals
})

export default connect(mapStateToProps, { getGoals, deleteGoal })(Goals)

