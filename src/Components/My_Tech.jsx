import React from 'react'
import { DiRedis } from 'react-icons/di'
import { FaNode, FaNodeJs } from 'react-icons/fa'
import { RiReactjsLine } from 'react-icons/ri'
import { SiMongodb } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'

const My_Tech = () => {
  return (
    <div className="pb-24">
        <h2 className="my-20 text-center text-4xl">Technologies</h2>
        <div className="flex flex-warp items-center justify-center gap-4">
            <div>
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </div>

            <div className="p-4">
                <TbBrandNextjs className="text-7xl"/>
            </div>
            <div className="p-4">
                <SiMongodb className='text-7xl text-cyan-500'/>
            </div>
            <div className="p-4">
                <DiRedis className='text-7xl text-red-700'/>
            </div>
            <div className="p-4">
                <FaNodeJs className='text-7xl text-green-700'/>
            </div>
            </div>
    </div>
  )
}

export default My_Tech