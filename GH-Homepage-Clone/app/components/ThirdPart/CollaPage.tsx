'use client'
import Sponsor from './Sponsor'
import Discount from './Discount'
import {motion} from "framer-motion"
import Paragraph from './Para'
import PullRequest from './PullRequest'

type Props = {}

const Collaboration = (props: Props) => {
     
    return (
        <div className='max-w-[1280px] mx-auto'>
            {/* Description Paragraph*/}
            <div className='flex md:pl-7 space-x-3 md:space-x-10'>
                <Paragraph/>
            </div>
            <img className="w-full h-auto d-block rounded-lg border-[1px] border-[#30363d]  " width="2500" height="1500" loading="lazy" decoding="async" alt="Illustration of project table view with cards grouped by 'Feature planning' phase." src="https://github.githubassets.com/images/modules/site/issues/illo/issues-plan.png"></img>
            <Discount/>

            <div className='flex justify-between items-center'>
                <PullRequest/>
            </div>
            <Sponsor/>
            <motion.div initial={{height:0}} whileInView={{height:'160px'}} transition={{delay:0.2}} className=" md:ml-10 ml-3 h-[160px] mt-[-20px] w-[3px] rounded-md bg-gradient-to-b from-transparent via-[#797ef9] to-[#abb4ff]" ></motion.div>
    </div>
    )
    }

export default Collaboration