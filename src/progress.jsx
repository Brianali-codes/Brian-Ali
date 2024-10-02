import { motion } from "framer-motion"



export default function Progress(){
    return(
        <motion.div 
                id='PROJECTS' className="flex flex-col justify-center items-center h-fit"
                initial={{ opacity: 0, y: 30 }} // Starting position
                whileInView={{ opacity: 1, y: 0 }} // Ending position when in view
                transition={{ duration: 2 }} // Transition duration
                viewport={{ once: true }} // Animation happens only once when it comes into view
            >
                    <p className='Desc text-black dark:text-white' >For More Projects Check out my <a href="https://github.com/gamerfunky78" target='_blank'><span className='text-cyan-400'>Github</span></a>.</p>
        </motion.div>
    )




}