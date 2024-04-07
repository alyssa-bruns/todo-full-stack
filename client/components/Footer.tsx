import { useState } from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  const [activeLink, setActiveLink] = useState('/')

  const handleLinkClick = (route: string) => {
    setActiveLink(route)
  }

  return (
    <>
      <footer className="footer">
        <ul className="filters">
          <li>
            <Link
              to="/"
              className={activeLink === '/' ? 'selected' : ''}
              onClick={() => handleLinkClick('/')}
            >
              All
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={activeLink === '/about' ? 'selected' : ''}
              onClick={() => handleLinkClick('/about')}
            >
              About
            </Link>
          </li>
        </ul>
      </footer>
    </>
  )
}

export default Footer
