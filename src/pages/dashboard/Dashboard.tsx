import React from 'react'
import { Section } from 'components'
import { SEO } from 'utilities'
import { Overview, Widgets } from 'pages/dashboard'

export function Dashboard() {
  const title = 'Stream Interview - Dashboard'
  return (
    <>
      <SEO title={title} />
      <Section>
        <>
          <h3>Analytics Overview</h3>
          <Overview />
        </>
      </Section>
      <Section>
        <>
          <h4>Hospital Stats</h4>
          <Widgets />
        </>
      </Section>
    </>
  )
}
