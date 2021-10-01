import React, {useContext} from 'react'
import { AppContext } from 'context'
import styled, {css} from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-regular-svg-icons'
import { Dropdown } from 'components'

export const Notifications = () => {
  const {appState} = useContext(AppContext)

  return (
    <Dropdown
      menuIcon={
        <NotificationIcon hasNew={appState.hasNewNotification}>
          <FontAwesomeIcon icon={faBell} />
        </NotificationIcon>}
      renderMenuItems={() => (
        <>
          <NotificationCard>
            Don't forget to hire Drew today!
          </NotificationCard>
        </>
      )}
    />
  )
}

const NotificationCard = styled.div`
  margin: 2px;
  padding: 2px 5px;
  background: ${props => props.theme.background};
  border: solid 1px ${props => props.theme.outline};
  font-size: 12px;
  text-align: left;
`

const NotificationIcon = styled.div`
  color: ${props => props.theme.text};
  padding: 5px 20px;
  font-size: 20px;
  position: relative;

  &::before {
    ${props => props.hasNew && css`
      content: '';
      position: absolute;
      background: ${props => props.theme.primary};
      border: solid 2px ${props => props.theme.white};
      border-radius: 50%;
      width: 5px;
      height: 5px;
      top: 5px;
      right: 19px;
    `}
  }
`

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Types
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// type Props = {
//   user: {}
// }
