import React, { useState } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'

export function Search() {
  const [searchText, setSearchText] = useState('')

  return (
    <>
      <HeaderSearchGroup>
        <input type="text" name="search" placeholder=" "
          value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
        <label htmlFor="search">Search for query</label>
        <FontAwesomeIcon icon={faSearch} />
      </HeaderSearchGroup>
    </>
  )
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Styles
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const HeaderSearchGroup = styled.div`
  margin-right: auto;
  position: relative;

  label {
    position: absolute;
    top: 12px;
    left: 24px;
    font-size: 14px;
    font-family: sans-serif;
    transition: 0.3s ease-out;
    pointer-events: none;
    line-height: 1;
    color: ${({theme}) => theme.gray};
  }

  svg {
    position: absolute;
    top: 0;
    height: 40px;
    right: 25px;
    opacity: 0.5;
    transition: 0.3s ease-out;
    pointer-events: none;
    cursor: pointer;
    color: ${props => props.theme.text};

    &:hover {
      color: ${props => props.theme.primary};
    }
  }

  input {
    margin: 0;
    border: solid 1px;
    border-radius: 25px;
    padding: 10px 25px;
    font-size: 16px;
    width: 300px;
    border-color: ${props => props.theme.outline};
    color: ${props => props.theme.text};
    background: ${props => props.theme.background};

    &:focus {
      outline: none;
    }

    &:focus + label,
    &:not(:placeholder-shown) + label {
      top: -5px;
      left: 20px;
      font-size: 10px;
      background: ${props => props.theme.background};
      padding: 0 4px;
    }

    &:not(:placeholder-shown) ~ svg {
      opacity: 1;
      pointer-events: all;
    }
  }
`
