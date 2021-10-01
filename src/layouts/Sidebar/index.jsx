import React, { useEffect, useState, useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import styled, { css } from 'styled-components'
import { ThemeToggle } from './ThemeToggle'
import { Nav } from './Nav'
import { Featured } from './Featured'

export function Sidebar() {
  const { state, dispatch } = useContext(AppContext)

  return (
    <>
      <SidebarWrapper className="sidebar">
        <ThemeToggle />
        <Nav />
        <Featured />
      </SidebarWrapper>
    </>
  )
}

const SidebarWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.tintBackground};
  padding: 40px 35px;
`