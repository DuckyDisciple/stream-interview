import React from 'react'
import { Section } from 'components'
import { SEO } from 'utilities'
import { ChatContainer } from 'pages/profiles'
import { motion } from 'framer-motion'

export function Profiles() {
  const title = 'Stream Interview - Doctor Profiles'
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
          <h3>Doctor Profiles</h3>
          <ChatContainer />
        </>
      </Section>
    </motion.div>
  )
}
