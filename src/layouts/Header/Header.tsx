import React from 'react'
import styled from 'styled-components'
import { Messages, Notifications, Profile, Search } from 'layouts/Header'

export function Header() {
  return (
    <>
      <HeaderWrapper className="header">
          <Search/>
          <Messages />
          <Notifications />
          <Profile />
      </HeaderWrapper>
    </>
  )
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Styles
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const HeaderWrapper = styled.header`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  padding: 30px 50px;
  box-sizing: border-box;
`