import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Desktop from "./Navigation/Desktop"
import Mobile from "./Navigation/Mobile"
import { useIntl } from "gatsby-plugin-intl"

const Header = () => {
  const currentLanguage = useIntl().locale

  const { allNavigationJson } = useStaticQuery(
    graphql`
      query Blu {
        allNavigationJson {
          nodes {
            name
            path
            icon
            lang
          }
        }
      }
    `
  )
  const headerByLanguage = allNavigationJson.nodes.filter(
    nodes => nodes.lang === currentLanguage
  )
  return (
    <header>
      <Desktop navlinks={headerByLanguage} />
      <Mobile navlinks={headerByLanguage} />
    </header>
  )
}

export default Header
