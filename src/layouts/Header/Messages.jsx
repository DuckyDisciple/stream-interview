import React, {useContext} from 'react'
import { AppContext } from 'context'
import styled, {css} from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { Dropdown } from 'components'

export const Messages = () => {
  const {appState} = useContext(AppContext)

  return (
    <Dropdown
      menuIcon={
        <MessageIcon hasNew={appState.hasNewMessage}>
          <FontAwesomeIcon icon={faEnvelope} />
        </MessageIcon>}
      renderMenuItems={() => (
        <>
          <MessageCard>
            <div className="from">From: Tommaso</div>
            <div className="message">Please hire Drew ASAP. Thank you.</div>
          </MessageCard>
        </>
      )}
    />
  )
}

const MessageCard = styled.div`
  margin: 2px;
  padding: 2px 5px;
  background: ${props => props.theme.background};
  border: solid 1px ${props => props.theme.outline};
  font-size: 12px;
  text-align: left;

  .from {
    font-weight: bold;
  }
  .message {
    font-style: italic;
  }
`

const MessageIcon = styled.div`
  color: ${props => props.theme.text};
  padding: 5px 10px;
  font-size: 20px;
  position: relative;

  &::before {
    ${props => props.hasNew && css`
      content: '';
      position: absolute;
      background: ${props => props.theme.lightRed};
      border: solid 2px ${props => props.theme.white};
      border-radius: 50%;
      width: 5px;
      height: 5px;
      top: 5px;
      right: 5px;
    `}
  }
`

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Types
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// type Props = {
//   user: {}
// }
