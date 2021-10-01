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
            <div className="user-info">User Info Here</div>
          </>
        )}
        />
    </ProfileWrapper>  
  )
}

const ProfileWrapper = styled.div`
  padding-left: 20px;
  border-left: solid 1px ${props => props.theme.outline};
  display: flex;
  align-items: center;

  &::after {
    content: '';
    height: 0;
    width: 0;
    border-left: solid 3px transparent;
    border-right: solid 3px transparent;
    border-top: solid 5px ${props => props.theme.text};
    display: block;
  }
`

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Types
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// type Props = {
//   user: {}
// }
