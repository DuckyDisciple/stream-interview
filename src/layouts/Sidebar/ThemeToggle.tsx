import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import styled from 'styled-components'

export function ThemeToggle() {
  const { appDispatch } = useContext(AppContext)

  return (
    <>
      <ThemeToggleButton onClick={() => appDispatch({type: "toggleTheme"})} />
    </>
  )
}

const ThemeToggleButton = styled.div`
  position: relative;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  cursor: pointer;
  box-shadow: 0 0 1px transparent;
  transition: 0.3s ease-out;

  &:hover {
    box-shadow: 0 0 4px ${props => props.theme.primary};
  }

  &::before {
    content: '';
    background: #fff;
    flex: 1;
  }
  &::after {
    content: '';
    background: #000;
    flex: 1;
  }
`