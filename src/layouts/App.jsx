import React from 'react'
import { AppProvider, AppContext } from "context"
import { ThemeProvider } from "styled-components"
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import styled from 'styled-components'

import {Header} from "./Header"
import {Sidebar} from "./Sidebar"
import {MainLayout} from "./MainLayout"


function App() {
  return (
    <>
      <AppProvider>
        <AppContext.Consumer>
          {({appState}) => (
            <ThemeProvider theme={appState.currentTheme}>
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

export default App;

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