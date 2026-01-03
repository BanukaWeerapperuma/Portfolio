import { DiRedis } from 'react-icons/di'
import { FaNode, FaNodeJs } from 'react-icons/fa'
import { RiFlutterFill, RiReactjsFill, RiReactjsLine } from 'react-icons/ri'
import { SiMongodb } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import { animate, motion, stagger } from "framer-motion";
import { Repeat } from 'lucide-react'
import { FaJava } from "react-icons/fa";
import { SiMysql, SiTailwindcss, SiThreedotjs } from "react-icons/si";

const iconVariants = (duration) => ({
    initial : {y : -10 },
    animate : {
        y : [10 , -10],
        transition : {
            duration : duration , 
            ease : "linear" ,
            repeat : Infinity , 
            repeatType : "reverse",
        }
    }
})


const My_Tech = () => {
  return (
    <div className="pb-24">
        <motion.h2 
            whileInView={{ opacity: 1 , y:0 }}
            initial = {{opacity :0 , y: -100 }}
            transition={{ duration : 1.5}}
                className="my-20 text-center text-4xl">Technologies</motion.h2>
          <motion.div 
            whileInView={{ opacity: 1 , x:0 }}
            initial = {{opacity :0 , x: -100 }}
            transition={{ duration : 1.5}}
          className="flex flex-warp items-center justify-center gap-4">
            
            <motion.div
                initial = "initial"
                animate = "animate"
                variants={ iconVariants(1)}>
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </motion.div>


            <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(2.5)}>
            <SiThreedotjs className="text-7xl text-white" />
            </motion.div>



            <motion.div 
                initial = "initial"
                animate = "animate"
                variants={ iconVariants(1.5)}
            className="p-4">
                <SiMongodb className='text-7xl text-cyan-500'/>
            </motion.div>



            <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(2)}>
            <FaJava className="text-7xl text-red-500" />
            </motion.div>

            <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(2.5)}>
            <RiFlutterFill className="text-7xl text-blue-400" />
            </motion.div>

            <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(3)}>
            <SiMysql className="text-7xl text-blue-600" />
            </motion.div>


            <motion.div 
                initial = "initial"
                animate = "animate"
                variants={ iconVariants(4)}
            className="p-4">
                <FaNodeJs className='text-7xl text-green-700'/>
            </motion.div>

            <motion.div
            initial="initial"
            animate="animate"
            variants={iconVariants(5)}>
            <SiTailwindcss className="text-7xl text-sky-400" />
            </motion.div>


            </motion.div>
    </div>
  )
}

export default My_Tech