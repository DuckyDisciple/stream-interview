import React from 'react'
import styled from 'styled-components'

export function ComingSoon () {
  return (
    <ComingSoonStyle>Coming Soon!</ComingSoonStyle>
  )
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Styles
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const ComingSoonStyle = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 50px 50px;
  font-size: 48px;
`