import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

export function ComingSoon () {
  return (
    <ComingSoonStyle
      initial={{transform: "translateX(-100%)", opacity: 0}}
      animate={{transform: "translateX(0%)", opacity: 1}}
      exit={{transform: "translateX(100%)", opacity: 0}}
      transition={{duration: 0.4}}
    >Coming Soon!</ComingSoonStyle>
  )
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Styles
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const ComingSoonStyle = styled(motion.main)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 50px 50px;
  font-size: 48px;
`