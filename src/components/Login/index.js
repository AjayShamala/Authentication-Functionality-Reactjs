import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import './index.css'
const Login = props => {
  const jwtToken = Cookies.get('js_token')
  const clickJwtToken = jwtToken => {
    const {history} = props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }
  const onClickApiCall = async () => {
    const userDetails = {username: 'rahul', password: 'rahul@2021'}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      clickJwtToken(data.jwt_token)
    }
  }
  if (jwtToken !== undefined) {
    return <Redirect to="/" />
  }
  return (
    <div className="contain">
      <h1 className="header">Please Login</h1>
      <div>
      <button onClick={onClickApiCall} className="button">
        Login with Sample Creds
      </button>
      </div>
    </div>
  )
}
export default Login
