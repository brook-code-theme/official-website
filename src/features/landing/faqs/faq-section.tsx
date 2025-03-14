'use client'

import { SectionLabel, Accordion } from '@shared/components'
import * as React from 'react'
import { FAQData, FAQItem } from './faq-item'
import jsonData from './data.json'
import { motion } from 'motion/react'

const faqs = jsonData.faqs as FAQData[]

export function FAQSection(): React.ReactElement {
  return (
    <section className="flex py-12 tablet:py-36 container mx-auto px-5 tablet:px-0">
      <motion.div
        initial={{ opacity: 0, y: 200, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: 'spring', duration: 1.2, delay: 0.2 }}
        viewport={{ once: true, margin: '-20% 0px' }}
        className="flex flex-col items-center mx-auto w-full"
      >
        <SectionLabel>FAQs</SectionLabel>

        <h2 className="text-3xl tablet:text-5xl text-foreground font-medium !leading-tight text-balance text-center mt-8 tablet:w-7/12">
          Most asked questions
        </h2>

        <p className="!leading-relaxed tablet:w-5/12 text-center text-foreground/60 mt-6 text-pretty">
          Most asked questions by developers around the world. Find what matters
          and need to know here.
        </p>

        <div className="flex justify-center items-center mt-16 w-full">
          <div className="flex justify-center w-11/12 tablet:w-5/12">
            <Accordion
              type="single"
              collapsible
              className="flex flex-col gap-2 w-full"
            >
              {faqs.map((data, index) => (
                <FAQItem position={index} data={data} key={index} />
              ))}
            </Accordion>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
