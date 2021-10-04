import React from 'react'
import { AppProvider, AppContext } from "context"
import { ThemeProvider } from "styled-components"
import {BrowserRouter} from 'react-router-dom'
import styled from 'styled-components'
import "styles/index"

import {Header} from "layouts/Header"
import {Sidebar} from "layouts/Sidebar"
import {MainLayout} from "layouts/MainLayout"


export function App() {
  return (
    <>
      <AppProvider>
        <AppContext.Consumer>
          {({state}) => (
            <ThemeProvider theme={state.currentTheme}>
              <BrowserRouter>
                <PageLayout>
                  <AppLayout>
                    <Header />
                    <Sidebar />
                    <MainLayout />
                  </AppLayout>
                </PageLayout>
              </BrowserRouter>
            </ThemeProvider>
          )}
        </AppContext.Consumer>
      </AppProvider>
    </>
  );
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Styles
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const PageLayout = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${props => props.theme.pageBackground};
  position: fixed;
  top: 0;
  left: 0;
  /* display: flex; */
  justify-content: center;
  font-family: sans-serif;
  overflow-y: auto;
  overflow-x: hidden;
`

const AppLayout = styled.div`
  width: 100%;
  max-width: calc(100vw - 100px);
  min-height: calc(100% - 100px);
  margin: 50px;
  border-radius: 20px;
  background: ${props => props.theme.background};
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: auto 1fr;
  overflow: hidden;
  max-height: 95vh;

  header {
    grid-column: 2;
    grid-row: 1;
  }

  aside {
    grid-column: 1;
    grid-row: 1 / -1;
  }

  main {
    grid-column: 2;
    grid-row: 2;
  }
`