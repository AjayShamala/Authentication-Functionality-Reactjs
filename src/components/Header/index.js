import {Link} from 'react-router-dom'
import './index.css'
const Header = () => (
  <div>
    <ul className="un-orderlist">
      <li>
        <Link to="/" className="link-container">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className="link-container">
          About
        </Link>
      </li>
    </ul>
  </div>
)
export default Header
