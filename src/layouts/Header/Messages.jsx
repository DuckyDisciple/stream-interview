import React, {useContext, useEffect} from 'react'
import { AppContext } from 'context'
import styled, {css} from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { Dropdown } from 'components'
import tommaso from "images/tommaso.png"

const fakeMessage = [
  {
    image: tommaso,
    from: "Tommaso",
    text: "Please hire Drew ASAP. Thank you."
  }
]

export const Messages = () => {
  const {appState, appDispatch} = useContext(AppContext)

  useEffect(() => {
    setTimeout(() => appDispatch({
      type: "SET_MESSAGES",
      messages: fakeMessage
    }), 5000)
    setTimeout(() => appDispatch({
      type: "SET_NEW_MESSAGES", 
      hasNew: true,
    }), 5000)
  }, [])

  return (
    <Dropdown
      menuIcon={
        <MessageIcon hasNew={appState.hasNewMessage}>
          <FontAwesomeIcon icon={faEnvelope} />
        </MessageIcon>}
      renderMenuItems={() => (
        <>
        {appState.messages.length ? appState.messages.map(({image, from, text}) => (
          <MessageCard onClick={() => appDispatch({type: "SET_NEW_MESSAGES", hasNew: false})}>
            <img src={image} alt={from} />
            <div className="from">From: {from}</div>
            <div className="message">{text}</div>
          </MessageCard>
        )) : 
          <NoMessages>No messages right now</NoMessages>
        }
        </>
      )}
    />
  )
}

const NoMessages = styled.div`
  padding: 5px;
  font-size: 12px;
  color: ${({theme}) => theme.text};
  min-width: 200px; 
`

const MessageCard = styled.div`
  margin: 2px;
  padding: 5px 5px;
  background: ${props => props.theme.background};
  border: solid 1px ${props => props.theme.outline};
  font-size: 12px;
  text-align: left;
  display: grid;
  grid-template-columns: 24px 1fr;
  grid-template-rows: 24px auto;
  column-gap: 8px;
  row-gap: 3px;
  align-items: center;
  min-width: 200px;
  cursor: pointer;
  z-index: 100;

  img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }

  .from {
    font-weight: bold;
    color: ${({theme}) => theme.text};
  }
  .message {
    color: ${({theme}) => theme.text};
    font-style: italic;
    grid-column: 1 / -1;
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
