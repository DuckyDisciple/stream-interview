import React from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import { Dashboard } from 'pages/dashboard'
import { Profiles } from 'pages/profiles'
import { ComingSoon } from "pages/ComingSoon"

export function MainLayout() {
  return (
    <>
      <MainWrapper>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/profiles" component={Profiles} />
          <Route exact path="/organization" component={ComingSoon} />
          <Route exact path="/department" component={ComingSoon} />
          <Route exact path="/settings" component={ComingSoon} />
          <Route component={ComingSoon} />
        </Switch>
      </MainWrapper>
    </>
  )
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Styles
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  padding: 0 50px 50px;
  overflow-y: auto;
`