import React from 'react'
import { ChannelPreviewProps } from 'stream-chat-react'
import styled from 'styled-components'

export function Doctor({channel, setActiveChannel}:ChannelPreviewProps) {
  const title= channel?.data?.title as string
  
  return (
    <DoctorWrapper onClick={() => setActiveChannel && setActiveChannel(channel)}>
      <div className="image-wrapper">
        <img src={channel?.data?.image} alt="Doctor Face" />
      </div>
      <div className="name">{channel?.data?.name}</div>
      <div className="title">{title}</div>
    </DoctorWrapper>
  )
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Styles
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const DoctorWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: repeat(2, auto);
  column-gap: 12px;
  padding: 10px;
  border-radius: 10px;
  background: ${({theme}) => theme.background};
  margin-bottom: 12px;
  cursor: pointer;
  transition: 0.3s ease-out;
  border: solid 1px ${({theme}) => theme.outline};

  &:hover {
    box-shadow: 0 0 5px ${({theme}) => theme.name === "light" ? theme.primary : theme.lightBlue};
  }

  .image-wrapper {
    grid-column: 1;
    grid-row: 1 / -1;
    background: ${({theme}) => theme.darkenedPrimary};
    color: ${({theme}) => theme.white};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45px;
    height: 45px;
    overflow: hidden;
  }

  .name {
    font-size: 16px;
    align-self: flex-end;
    color: ${({theme}) => theme.gray};
    font-weight: bold;
  }
  .title {
    font-size: 12px;
    color: ${({theme}) => theme.gray};
  }
`