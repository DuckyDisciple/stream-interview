import React from 'react'
import { Section } from 'components'
import { SEO } from 'utilities'
import ChatContainer from './ChatContainer'

export default function Profiles() {
  const title = 'Stream Interview - Doctor Profiles'
  return (
    <>
      <SEO title={title} />
      <Section>
        <>
          <h3>Doctor Profiles</h3>
          <ChatContainer />
        </>
      </Section>
    </>
  )
}
