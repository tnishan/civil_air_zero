import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="footer">
          <h2></h2>
          <ul>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms of Service</Link></li>
          </ul>
          <p>Kathmandu, Nepal</p>
          <p>Phone: +977-9851111053</p>
          <p>Email: nishan.idea23@.com</p>
          <p>© 2023 Civil Air</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
