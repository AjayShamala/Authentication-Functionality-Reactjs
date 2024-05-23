import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'
const LogoutButton = props => {
  const onClickLogoUTButton = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <div className="contains">
      <button onClick={onClickLogoUTButton} className="button-container">
        Logout
      </button>
    </div>
  )
}
export default withRouter(LogoutButton)
