import React from 'react'
import { motion } from 'framer-motion'
import logo from '../logo.svg'

const Loader = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    <img src={logo} alt="" />
  </motion.div>
)

export default Loader
