// ** React Imports
import { Fragment, useEffect, useState } from 'react'

// ** Custom Components
import NavbarUser from './NavbarUser'
import { NavItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import themeConfig from '@configs/themeConfig'

const ThemeNavbar = (props) => {
  // ** Props
  const { skin, setSkin } = props

  return (
    <Fragment>
      <div className='navbar-header d-xl-block'>
        <ul className='nav navbar-nav'>
          <NavItem>
            <Link to='/' className='navbar-brand'>
              <span className='brand-logo'>
                <img src={themeConfig.app.appLogoImage} alt='logo' />
              </span>
              <h2 className='brand-text mb-0'>{themeConfig.app.appName}</h2>
            </Link>
          </NavItem>
        </ul>
      </div>

      <NavbarUser skin={skin} setSkin={setSkin} />
    </Fragment>
  )
}

export default ThemeNavbar
