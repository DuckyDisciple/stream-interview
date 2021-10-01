import React from 'react'
import { NavLink} from 'react-router-dom'
import styled from 'styled-components'
import { Button } from 'components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAppleAlt, faBookMedical, faColumns, faShieldAlt, faShieldVirus } from '@fortawesome/free-solid-svg-icons'

export function Nav() {
  return (
    <NavWrapper>
        <NavLink className="nav-link" exact to="/" aria-label="Dashboard page">
          <Button>
            <FontAwesomeIcon icon={faColumns} />
            Dashboard
          </Button>
        </NavLink>
        <NavLink className="nav-link" to="/profiles" aria-label="Doctor Profiles page">
          <Button>
            <FontAwesomeIcon icon={faBookMedical} />
            Dr. Profiles
          </Button>
        </NavLink>
        <NavLink className="nav-link" to="/organization" aria-label="Organization page">
          <Button>
            <FontAwesomeIcon icon={faShieldAlt} />
            Organization
          </Button>
        </NavLink>
        <NavLink className="nav-link" to="/department" aria-label="Department page">
          <Button>
            <FontAwesomeIcon icon={faShieldVirus} />
            Department
          </Button>
        </NavLink>
        <NavLink className="nav-link" to="/settings" aria-label="Settings page">
          <Button>
            <FontAwesomeIcon icon={faAppleAlt} />
            Settings
          </Button>
        </NavLink>
    </NavWrapper>
  )
}

const NavWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  .nav-link {
    margin-bottom: 14px;

    button {
      width: 100%;
    }

    &.active button {
      background-color: ${({theme}) => theme.background};
      box-shadow: 0 3px 5px -2px ${({theme}) => theme.shadow};
    }
  }
`
