import React from 'react'
import styled from 'styled-components'
import sidebarImage from 'images/nmh-sidebar.png'

export function Featured() {
  return (
    <FeaturedWrapper>
      <img src={sidebarImage} />
    </FeaturedWrapper>
  )
}

const FeaturedWrapper = styled.div`
  margin-top: auto;
  background: #fff;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`