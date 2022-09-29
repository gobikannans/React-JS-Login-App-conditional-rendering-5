import {Component} from 'react'
import './index.css'
import Login from '../Login'
import Logout from '../Logout'
import Message from '../Message'

class Home extends Component {
  state = {isLoggedIn: true}

  onButton = () => {
    this.setState(prevState => ({isLoggedIn: !prevState.isLoggedIn}))
  }

  render() {
    const {isLoggedIn} = this.state

    return (
      <div className="bg-container">
        <div className="card">
          <Message isLoggedIn={isLoggedIn} />
          {isLoggedIn ? (
            <Login onLogin={this.onButton} />
          ) : (
            <Logout onLogout={this.onButton} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
