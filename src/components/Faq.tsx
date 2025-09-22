import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Faqs } from '@/types'
function Faq({question,answer}:Faqs) {
  return (
      <div dir='rtl' className='bg-white p-[34px] rounded-[15px]'>
      <Accordion type="single" collapsible className=''>
  <AccordionItem value="item-1">
    <AccordionTrigger className='text-[#35356A] text-[20px] text-right'>{question}</AccordionTrigger>
    <AccordionContent className='text-[#999EB2] text-right'>
{answer}
    </AccordionContent>
  </AccordionItem>
</Accordion>
    </div>
  )
}

export default Faq