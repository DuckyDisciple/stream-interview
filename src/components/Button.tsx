import styled, { css } from 'styled-components'

export const baseButtonStyle = css`
  color: ${({theme}) => theme.text};
  background: transparent;
  display: inline-block;
  text-align: left;
  appearance: none;
  padding: 10px 20px;
  border-radius: 20px;
  transition: 0.3s ease-out;
  outline: none;
  border: none;
  font-size: 14px;
  white-space: nowrap;
  cursor: pointer;
  
  &:hover {
    background-color: ${({theme}) => theme.name === "light" ? theme.lightBlue : theme.darkenedPrimary};
  }

  svg {
    margin-right: 12px;
  }
`

export const Button = styled.button`
  ${baseButtonStyle};
`
