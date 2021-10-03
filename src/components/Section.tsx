import React, { ReactChild } from 'react'
import styled from 'styled-components'

type Props = {
  children: ReactChild
}

export function Section({ children }: Props) {
  return (
    <SectionWrapper>
      {children}
    </SectionWrapper>
  )
}

const SectionWrapper = styled.div`
  position: relative;
  padding: 25px 0 25px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${({theme}) => theme.text};
  }
`
