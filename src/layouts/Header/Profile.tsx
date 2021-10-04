import React from 'react'
import { Dropdown } from 'components'
import { Avatar } from 'utilities'
import userProfile from 'images/user-profile.png'
import styled from 'styled-components'

export const Profile = () => {
  return (
    <ProfileWrapper>
      <Dropdown
      menuIcon={<Avatar photoSrc={userProfile} size={40} />}
      renderMenuItems={() => (
        <>
            <div className="user-info">Fake Link</div>
            <div className="user-info">Another Fake Link</div>
            <div className="user-info">Just A Placeholder</div>
            <div className="logout">Logout</div>
          </>
        )}
        />
    </ProfileWrapper>  
  )
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Styles
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const ProfileWrapper = styled.div`
  padding-left: 20px;
  border-left: solid 1px ${props => props.theme.outline};
  display: flex;
  align-items: center;
  color: ${({theme}) => theme.text};
  z-index: 100;

  .user-info {
    font-size: 12px;
    cursor: pointer;
    padding: 3px;
    transition: 0.3s ease-out;
    
    &:hover {
      background: ${({theme}) => theme.pageBackground};;
      color: ${({theme}) => theme.name === "light" ? theme.primary : theme.lightBlue};
    }
  }
  
  .logout {
    padding: 3px;
    font-size: 10px;
    margin-top: 8px;
    cursor: pointer;
    transition: 0.3s ease-out;
    
    &:hover {
      background: ${({theme}) => theme.pageBackground};;
      color: ${({theme}) => theme.name === "light" ? theme.primary : theme.lightBlue};
    }
  }

  &::after {
    content: '';
    height: 0;
    width: 0;
    margin-left: 5px;
    border-left: solid 3px transparent;
    border-right: solid 3px transparent;
    border-top: solid 5px ${props => props.theme.text};
    display: block;
  }
`
