// ** Third Party Components
import { CiLight } from 'react-icons/ci'
import { CgDarkMode } from 'react-icons/cg'
import { MdDarkMode } from 'react-icons/md'

// ** Reactstrap Imports
import { Button, NavItem, NavLink } from 'reactstrap'
import { Link } from 'react-router-dom'
import { Fragment, useEffect, useState } from 'react'

const NavbarUser = (props) => {
  // ** Props
  const { skin, setSkin } = props

  // ** States
  const [hideNavLinks, setHideNavLinks] = useState(false)

  // ** Event listener callback
  const handleResize = () => {
    const breakpoint = 1024
    setHideNavLinks(window.innerWidth <= breakpoint)
  }

  // ** Effect hook to add and remove event listener
  useEffect(() => {
    // Initial check
    handleResize()

    // Add event listener
    window.addEventListener('resize', handleResize)

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, []) // Empty dependency array, runs only on mount and unmount

  console.log('hideNavLinks', hideNavLinks)

  // ** Function to toggle Theme (Light/Dark/SemiDark)
  const ThemeToggler = () => {
    if (skin === 'dark') {
      return (
        <CgDarkMode className='ficon' onClick={() => setSkin('semi-dark')} />
      )
    } else if (skin === 'semi-dark') {
      return <CiLight className='ficon' onClick={() => setSkin('light')} />
    } else {
      return <MdDarkMode className='ficon' onClick={() => setSkin('dark')} />
    }
  }

  return (
    <ul
      className={`nav navbar-nav align-items-center ms-auto gap-3 ${
        hideNavLinks && 'd-none'
      }`}
    >
      <NavItem className='d-none d-lg-block'>
        <NavLink className='nav-link-style'>
          <ThemeToggler />
        </NavLink>
      </NavItem>
      <NavItem>
        <Link to='/projects' className='navLink'>
          <span>Projects</span>
        </Link>
      </NavItem>
      <NavItem>
        <Link to='/about' className='navLink'>
          <span>About</span>
        </Link>
      </NavItem>
      <NavItem>
        <Link to='/contact' className='navLink'>
          <Button color='primary'>Hire Me</Button>
        </Link>
      </NavItem>
    </ul>
  )
}
export default NavbarUser
