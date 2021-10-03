import React, {useContext, useEffect} from 'react'
import { AppContext } from 'context'
import styled, {css} from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-regular-svg-icons'
import { Dropdown } from 'components'
import { faExclamation } from '@fortawesome/free-solid-svg-icons'

const fakeNotification = [
  {
    text: "Don't forget to hire Drew today!"
  }
]

export const Notifications = () => {
  const {appState, appDispatch} = useContext(AppContext)

  useEffect(() => {
    setTimeout(() => appDispatch({
      type: "SET_NOTIFICATIONS",
      notifications: fakeNotification
    }), 10000)
    setTimeout(() => appDispatch({
      type: "SET_NEW_NOTIFICATIONS", 
      hasNew: true,
    }), 10000)
  }, [])

  return (
    <Dropdown
      menuIcon={
        <NotificationIcon hasNew={appState.hasNewNotification}>
          <FontAwesomeIcon icon={faBell} />
        </NotificationIcon>}
      renderMenuItems={() => (
        <>
          {appState.notifications.length ? appState.notifications.map((noti) => (
            <NotificationCard onClick={() => appDispatch({type: "SET_NEW_NOTIFICATIONS", hasNew: false})}>
              <FontAwesomeIcon icon={faExclamation} /> {noti.text}
            </NotificationCard>
          )) :
            <NoNotifications>No notifications right now</NoNotifications>
          }
        </>
      )}
    />
  )
}

const NoNotifications = styled.div`
  padding: 5px;
  font-size: 12px;
  color: ${({theme}) => theme.text};
  min-width: 200px; 
`

const NotificationCard = styled.div`
  margin: 2px;
  padding: 5px;
  background: ${props => props.theme.background};
  border: solid 1px ${props => props.theme.outline};
  font-size: 12px;
  text-align: left;
  color: ${({theme}) => theme.text};
  min-width: 200px;
  cursor: pointer;
  z-index: 100;
  
  svg {
    color: ${({theme}) => theme.text};
    margin: 0 8px 0 3px;
  }
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
