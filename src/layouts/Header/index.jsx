import React, { useEffect, useState, useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import styled, { css } from 'styled-components'
import { Messages } from './Messages'
import { Notifications } from './Notifications'
import { Profile } from './Profile'
import { Search } from './Search'

export function Header() {
  const { state, dispatch } = useContext(AppContext)

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

const HeaderWrapper = styled.header`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  padding: 30px 50px;
  box-sizing: border-box;
`