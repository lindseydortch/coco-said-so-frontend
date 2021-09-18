import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addGoal } from '../../../actions/goals'

export class GoalsAdd extends Component {
  state = {
    goal: '',
    date_date: '', 
    tasks_to_complete_goal: '', 
  }

  static propTypes = {
    addGoal: PropTypes.func.isRequired
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value})

  onSubmit = e => {
    e.preventDefault()
    const { goal, date_date, tasks_to_complete_goal } = this.state
    const goals = { goal, date_date, tasks_to_complete_goal }
    this.props.addGoal(goals)
    this.setState({
      goal: '',
      date_date: '', 
      tasks_to_complete_goal: '', 
    })
  }

  render() {
    const { goal, date_date, tasks_to_complete_goal } = this.state
    return (
      <section className="goal-add">
        <h2>Add A Goal</h2>
        <form className="form form-background-orange" onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="goal">Goal</label>
            <input type="text" name="goal" onChange={this.onChange} value={goal} />
          </div>
          <div className="form-group">
            <label htmlFor="date_date">When do you want to accomplish this goal?</label>
            <input type="date" name="date_date" onChange={this.onChange} value={date_date} />
          </div>
          <div className="form-group">
            <label htmlFor="tasks_to_complete_goal">What's one thing you can do every week to accomplish this goal?</label>
            <input type="text" name="tasks_to_complete_goal" onChange={this.onChange} value={tasks_to_complete_goal} />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-yellow-light btn-mg-small">
              Add Goal
            </button>
          </div>
        </form>
      </section>
    )
  }
}

export default connect(null, { addGoal })(GoalsAdd)