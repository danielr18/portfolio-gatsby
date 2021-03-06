import React from "react"
import { GlobalStyles } from "../../theme/GlobalStyles"
import styled, { ThemeProvider } from "styled-components"

import { useToggleTheme } from "../../utils/useToggleTheme"
import { darkTheme, lightTheme } from "../../theme/Theme"
import ThemeContext from "../../utils/ThemeContext"
import Header from "../organisms/Header"

const MainWrapper = styled.div`
  margin: 0 ${props => props.theme.spacing.mobile.sides} 20vh
    ${props => props.theme.spacing.mobile.sides};
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    margin: 0 ${props => props.theme.spacing.desktop.sides} 0
      ${props => props.theme.spacing.desktop.sides};
  }
`

const Content = styled.div``

const Layout = ({ children }) => {
  const [theme, toggleTheme] = useToggleTheme()

  const themeValue = { theme, toggleTheme }

  const themeMode = theme === "light" ? lightTheme : darkTheme
  return (
    <ThemeContext.Provider value={themeValue}>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <Header />
        <MainWrapper>
          <Content>{children}</Content>
        </MainWrapper>
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default Layout
