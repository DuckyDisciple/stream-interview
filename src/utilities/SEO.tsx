import React from "react"
import { Helmet } from "react-helmet-async"

// * Site-wide SEO Component for use on all pages
// ? These properties will override the ones in Default Helmet
// We can add additional meta tags for SEO as needed in a real project
export function SEO({ title = "Web Development Agency" }: Props) {
  const siteName = "Stream Interview"
  return <Helmet title={title} titleTemplate={`${siteName} | %s`} />
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Types
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
type Props = {
  title?: string
}