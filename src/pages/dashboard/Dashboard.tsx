import React from 'react'
import { Section } from 'components'
import { SEO } from 'utilities'
import { Overview, Widgets } from 'pages/dashboard'
import { motion } from 'framer-motion'

export function Dashboard() {
  const title = 'Stream Interview - Dashboard'
  return (
    <motion.div
      initial={{transform: "translateX(-100%)", opacity: 0}}
      animate={{transform: "translateX(0%)", opacity: 1}}
      exit={{transform: "translateX(100%)", opacity: 0}}
      transition={{duration: 0.4}}
    >
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
    </motion.div>
  )
}
