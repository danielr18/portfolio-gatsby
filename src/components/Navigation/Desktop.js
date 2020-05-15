import React from "react"

import styled from "styled-components"
import ThemeToggle from "../ThemeToggle"
import { Tabs, Tab } from "../Base/Tabs"
import { useIntl, changeLocale } from "gatsby-plugin-intl"
import { useTheme } from "styled-components"
import { Language } from "@styled-icons/material/Language"
import { KeyboardArrowDown } from "@styled-icons/material-rounded/KeyboardArrowDown"
import LanguageSwitch from "../Base/LanguageSwitch"
const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 6vh;
  padding: 0 var(--sides-padding-desktop);
  background-color: ${({ theme }) => theme.colors.body};
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.75);
  @media (max-width: 768px) {
    display: none;
  }
`

const Logo = styled.h4`
  color: ${({ theme }) => theme.colors.primary};
`

const NavItems = styled.ul`
  display: flex;
  align-items: center;
`

const NavTool = styled.div`
  display: flex;
  align-items: center;
`

const Desktop = ({ navlinks }) => {
  const intl = useIntl()
  const l = ["Deutsch", "English", "Francais"]
  const theme = useTheme()
  return (
    <Nav>
      <Logo>Logo</Logo>
      <NavItems>
        <Tabs
          indicatorColor={theme.colors.primary}
          textColor={theme.colors.bodyContrast}
        >
          {navlinks.map((link, index) => {
            return (
              <Tab
                key={index}
                label={link.name.toUpperCase()}
                href={link.path}
              />
            )
          })}
        </Tabs>

        <NavTool>
          <LanguageSwitch
            changeLanguage={changeLocale}
            currentLanguage={intl.locale}
            languages={l}
            space={"6vh"}
            iconLeft={<Language />}
            iconRight={<KeyboardArrowDown />}
            iconColor={theme.colors.primary}
            dropdownBackground={theme.colors.bodyTint}
            dropdownHoverColor={theme.colors.toolbarBackground}
          ></LanguageSwitch>
          <ThemeToggle />
        </NavTool>
      </NavItems>
    </Nav>
  )
}

export default Desktop
