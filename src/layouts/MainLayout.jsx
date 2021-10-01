import React, { useEffect, useState, useContext } from 'react'
import { AppContext } from 'context'
import { Route, Switch } from 'react-router-dom'
import styled, { css } from 'styled-components'
import Dashboard from '../pages/dashboard'

// import Dashboard from "pages/Dashboard"

export function MainLayout() {
  const { state, dispatch } = useContext(AppContext)

  return (
    <>
      <MainWrapper>
        <Switch>
          <Route exact path="/" component={Dashboard} />
        </Switch>
      </MainWrapper>
    </>
  )
}

const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  padding: 0 50px 50px;
`