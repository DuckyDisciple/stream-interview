import React from 'react'
import { Section } from 'components'
import { SEO } from 'utilities'
import Overview from './Overview'
import Widgets from './Widgets'

export default function Dashboard() {
  const title = 'Stream Interview - Dashboard'
  const description = `Here's the dashboard view for the Stream Interview example`
  return (
    <>
      <SEO title={title} description={description} pathname="/" />
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
