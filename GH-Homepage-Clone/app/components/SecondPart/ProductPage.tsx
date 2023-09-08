'use client'
import React from 'react'
import EditorPage from './Blocks/EditorPage'
import CodeSpace from './Blocks/CodeSpace'
import CopilotBlock from './Blocks/CopilotBlock'
import Description from './Blocks/Description'
import {motion} from "framer-motion"
import Action from './Blocks/Action'

type Props = {}

const Productivity = (props: Props) => {
  return (
    <div className='max-w-[1280px] mx-auto'>
        <div className='flex md:pl-10 space-x-3 md:space-x-10'>
            {/* Description Paragraph*/}
            <Description/>
            
        </div>
        <EditorPage/>
        <CodeSpace/>
        <div className='relative z-[1] '>
            <CopilotBlock/>
        </div>
        <div className='flex justify-between items-center'>
            <Action/>
        </div>
        <motion.div initial={{height:0}} whileInView={{height:'160px'}} transition={{delay:0.3}} viewport={{once:false}} className=" md:ml-10 ml-3 h-[160px] mt-[-20px] w-[3px] rounded-md bg-gradient-to-b from-transparent via-[#ea6045] to-[#ffa28b]" ></motion.div>
    </div>
  )
}

export default Productivity