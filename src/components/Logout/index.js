import './index.css'

const Logout = props => {
  const {onLogout} = props

  return (
    <button className="btn-style" type="button" onClick={onLogout}>
      Logout
    </button>
  )
}

export default Logout
