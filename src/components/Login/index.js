import './index.css'

const Login = props => {
  const {onLogin} = props
  return (
    <button className="btn-style" type="button" onClick={onLogin}>
      Login
    </button>
  )
}

export default Login
