import React, { createContext, useReducer } from "react"
import theme from "../styles/Themes"

const initialState = {
  currentTheme: theme.light,
  hasNewNotification: false,
  hasNewMessage: false,
  notifications: [],
  messages: [],
}

const AppContext = createContext(initialState)

const reducer = (state, action) => {
  switch (action.type) {
    case "toggleTheme":
      return {
        ...state,
        currentTheme:
          state.currentTheme.name === "light" ? theme.dark : theme.light
      }
    case "SET_NOTIFICATIONS":
      return {
        ...state,
        notifications: action.notifications,
      }
    case "SET_NEW_NOTIFICATIONS":
      return {
        ...state,
        hasNewNotification: action.hasNew,
      }
    case "SET_NEW_MESSAGES":
      return {
        ...state,
        hasNewMessage: action.hasNew,
      }
    case "SET_MESSAGES":
      return {
        ...state,
        messages: action.messages,
      }
    default:
      return state
  }
}

const AppProvider = ({ children }) => {
  const [appState, appDispatch] = useReducer(reducer, initialState)

  return (
    <AppContext.Provider value={{ appState, appDispatch }}>
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider }
