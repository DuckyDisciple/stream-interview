import logo from './logo.svg';
import './App.css';
import { AppProvider, AppContext } from "./context/AppContext"
import { ThemeProvider } from "styled-components"
import {BrowserRouter,Switch,Route} from 'react-router-dom'

import ErrorWrapper from "./components/ErrorWrapper"
import Dashboard from "./pages/Dashboard"


function App() {
  return (
    <>
      <AppProvider>
        <AppContext.Consumer>
          {({appState}) => (
            <ThemeProvider theme={appState.currentTheme}>
              <BrowserRouter>
              <ErrorWrapper>
                <Switch>
                  <Route
                    exact
                    path="/"
                    render={props => <Dashboard {...props} />}
                  />
                </Switch>
              </ErrorWrapper>
            </BrowserRouter>
          </ThemeProvider>
        )}
      </AppContext.Consumer>
    </AppProvider>
    </>
  );
}

export default App;
