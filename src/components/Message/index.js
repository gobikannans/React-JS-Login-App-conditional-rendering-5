import './index.css'

const Message = props => {
  const {isLoggedIn} = props

  if (isLoggedIn) {
    return <h1 className="heading">Please Login</h1>
  }
  return <h1 className="heading">Welcome User</h1>
}

export default Message
