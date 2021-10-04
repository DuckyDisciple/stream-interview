import React, {useContext, useEffect} from 'react'
import { AppContext, Message } from 'context'
import styled, {css} from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { Dropdown } from 'components'
import tommaso from "images/tommaso.png"
import { Types } from 'context'

const fakeMessage: [Message?] = [
  {
    image: tommaso,
    from: "Tommaso",
    text: "Please hire Drew ASAP. Thank you."
  }
]

export const Messages = () => {
  const {state, dispatch} = useContext(AppContext)

  useEffect(() => {
    setTimeout(() => dispatch({
      type: Types.SetMessages,
      payload: {
        messages: fakeMessage
      }
    }), 5000)
    setTimeout(() => dispatch({
      type: Types.SetNewMessages,
      payload: {
        hasNew: true,
      }
    }), 5000)
  }, [])

  return (
    <Dropdown
      menuIcon={
        <MessageIcon hasNew={state.hasNewMessage}>
          <FontAwesomeIcon icon={faEnvelope} />
        </MessageIcon>}
      renderMenuItems={() => (
        <>
          {state.messages.length ? state.messages?.map((msg) => (
            <MessageCard onClick={() => dispatch({type: Types.SetNewMessages, payload: {hasNew: false}})}>
              <img src={msg?.image} alt={msg?.from} />
              <div className="from">From: {msg?.from}</div>
              <div className="message">{msg?.text}</div>
            </MessageCard>
          )) : 
            <NoMessages>No messages right now</NoMessages>
          }
        </>
      )}
    />
  )
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Styles
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
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
      width: 9px;
      height: 9px;
      top: 5px;
      right: 5px;
    `}
  }
`
