import React from 'react'
import styled from 'styled-components'
import { ThemeToggle, Nav, Featured } from 'layouts/Sidebar'

export function Sidebar() {
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

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Styles
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const SidebarWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.tintBackground};
  padding: 40px 35px;
`