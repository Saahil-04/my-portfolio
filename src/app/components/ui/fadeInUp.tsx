
'use client'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

export default function FadeInUp({
    children,
    delay = 0,
    duration = 0.8,
    y = 20,
    className = ''
}: {
    children: ReactNode
    delay?: number
    duration?: number
    y?: number
    className?: string
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay, duration, ease: 'easeOut' }}
            className={className}
        >
            {children}
        </motion.div>
    )
}
