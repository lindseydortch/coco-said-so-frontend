import './App.css'
import { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './store'
import { loadUser } from './actions/auth'

// ==============================================
// BRING IN COMPOENENTS 
// ==============================================
// LAYOUT 
import Header from './components/layout/Header'

// USER AUTH 
import PrivateRoute from './private/PrivateRoute'
import Login from './components/accounts/Login'
import Register from './components/accounts/Register'

// DASHBOARD 
import Dashboard from './components/dashboard/Dashboard'

class App extends Component{
  componentDidMount() {
    store.dispatch(loadUser())
  }

  render() {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <Fragment>
            <Header/>
            <PrivateRoute exact path='/' component={Dashboard} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </Fragment>
        </Router>
      </Provider>
    </div>
  )
  }
}

export default App
