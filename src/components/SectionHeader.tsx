import { SectionsHeader } from '@/types'
import React from 'react'

function SectionHeader({title , subtitle}:SectionsHeader) {
  return (
    <div className='flex flex-col gap-5 justify-center items-center py-10'>
      <h2 className='text-[#35356A] text-center text-[20px] md:text-[30px] lg:text-[48px]'>{title}</h2>
      <p className='text-[#6C7278] text-lg lg:text-xl text-center '>{subtitle}</p>
    </div>
  )
}

export default SectionHeader