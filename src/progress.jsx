import { motion } from "framer-motion"
import Button2 from "./components/button2"

export default function Progress(){
    return(<>
        <motion.div 
                    id='PROJECTS' className="flex flex-col justify-center items-center h-fit"
                    initial={{ opacity: 0, y: 20 }} // Starting position
                whileInView={{ opacity: 1, y: 0 }} // Ending position when in view
                transition={{ duration: 1 }} // Transition duration
                viewport={{ once: true }} // Animation happens only once when it comes into view
            >
                    <p className='Desc text-black dark:text-white flex flex-col justify-center items-center gap-4' >For More Projects Check out my <a href="https://github.com/brianali-codes" target='_blank'><Button2 btnName="Github Repo"/></a></p>
        </motion.div>
        <br />
    </>
        






    )




}
