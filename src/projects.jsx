import CH from './assets/COOKHAVEN.webp'
import GG from './assets/GUAP.webp'
import FW from './assets/FRESCO.webp'
import IG from './assets/IG.webp'
import MS from './assets/MS.webp'
import { motion } from 'framer-motion'
import QTC from './assets/QUICK.webp'


export default function Projects(){

    return(
        <div 
            id='PROJECTS' className="flex flex-col justify-center items-center"
            >
            
            <motion.p 
                initial={{ opacity: 0, y: 50 }} // Starting position
                whileInView={{ opacity: 1, y: 0 }} // Ending position when in view
                transition={{ duration: 1 }} // Transition duration
                viewport={{ once: true }} // Animation happens only once when it comes into view
            >
                <p className="ABT text-cyan-400">My Projects.</p>
            </motion.p>
            
            <br /><br />

            <motion.div 
                initial={{ opacity: 0, y: 50 }} // Starting position
                whileInView={{ opacity: 1, y: 0 }} // Ending position when in view
                transition={{ duration: 1.1 }} // Transition duration
                viewport={{ once: true }} // Animation happens only once when it comes into view
            >

                <p className='Desc text-black dark:text-white'>Since 2023 i have been perfecting my skills and making user friendly applications that are interactive using my respective tech stack Some of the projects include:</p>
            </motion.div>
            
            <br /><br />

                    <div className="Project-container">

                    <motion.div 
                        initial={{ opacity: 0, y: 50 }} // Starting position
                        whileInView={{ opacity: 1, y: 0 }} // Ending position when in view
                        transition={{ duration: 1 }} // Transition duration
                        viewport={{ once: true }} // Animation happens only once when it comes into view
                    >
                        <div class="project">

                            <img src={QTC} alt="Project Image"/>

                            <div class="project-info flex flex-col">
                                <p className='Desc'>I worked as the Front-end Developer For the Quick-Tech College Website. </p>
                                <br /><br />
                                <a href="https://quicktechcollege.netlify.app/" target='_blank'><p className='GO'>Go to website</p></a>
                            </div>
                        </div>

                    </motion.div>


                    <motion.div 
                        initial={{ opacity: 0, y: 50 }} // Starting position
                        whileInView={{ opacity: 1, y: 0 }} // Ending position when in view
                        transition={{ duration: 1 }} // Transition duration
                        viewport={{ once: true }} // Animation happens only once when it comes into view
                    >
                            <div class="project">

                                <img src={GG} alt="Project Image"/>

                                <div class="project-info flex flex-col">
                                    <p className='Desc'>As a video game enthusiast i keep my eye on new video game giveaways, this website uses an API that does exactly that.</p>
                                    <br /><br />
                                    <a href="https://guapgiveaways.netlify.app/" target='_blank'><p className='GO'>Go to website</p></a>
                                </div>
                            </div>

                    </motion.div>
                    

                    <motion.div 
                        initial={{ opacity: 0, y: 50 }} // Starting position
                        whileInView={{ opacity: 1, y: 0 }} // Ending position when in view
                        transition={{ duration: 1 }} // Transition duration
                        viewport={{ once: true }} // Animation happens only once when it comes into view
                    >
                             <div class="project">

                                <img src={FW} alt="Project Image"/>

                                <div class="project-info flex flex-col">
                                    <p className='Desc'>This is a wallpaper APP, it uses a Wallpaper Fetching API for the content it delivers, the content is mainly anime related.</p>
                                    <br /><br />
                                    <a href="https://frescowallpapers.netlify.app/" target='_blank'><p className='GO'>Go to website</p></a>
                                </div>
                            </div>

                    </motion.div>

                   
                    <motion.div 
                        initial={{ opacity: 0, y: 50 }} // Starting position
                        whileInView={{ opacity: 1, y: 0 }} // Ending position when in view
                        transition={{ duration: 1 }} // Transition duration
                        viewport={{ once: true }} // Animation happens only once when it comes into view
                    >
                        <div class="project">

                            <img src={IG} alt="Project Image"/>

                            <div class="project-info flex flex-col">
                                <p className='Desc'>This is a website that allows you to download mp4 files from instagram and save them locally, it also uses an API. </p>
                                <br /><br />
                                <a href="https://ig3s.netlify.app/" target='_blank'><p className='GO'>Go to website</p></a>
                            </div>
                        </div>

                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 50 }} // Starting position
                        whileInView={{ opacity: 1, y: 0 }} // Ending position when in view
                        transition={{ duration: 1.2 }} // Transition duration
                        viewport={{ once: true }} // Animation happens only once when it comes into view
                    >
                            <div class="project">

                                <img src={CH} alt="Project Image"/>

                                <div class="project-info flex flex-col">
                                    <p className='Desc'>This is A recipe web-app, Searches For recipes and results are rendered dynamically using the power of React.js.</p>
                                    <br /><br />        
                                    <a href="https://cookhaven.netlify.app/" target='_blank'><p className='GO'>Go to website</p></a>
                                </div>
                            </div>

                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 50 }} // Starting position
                        whileInView={{ opacity: 1, y: 0 }} // Ending position when in view
                        transition={{ duration: 1 }} // Transition duration
                        viewport={{ once: true }} // Animation happens only once when it comes into view
                    >
                        <div class="project">

                            <img src={MS} alt="Project Image"/>

                            <div class="project-info flex flex-col">
                                <p className='Desc'>This is a website that allows you to Generate Memes From Open source APis. </p>
                                <br /><br />
                                <a href="https://memesplat.netlify.app/" target='_blank'><p className='GO'>Go to website</p></a>
                            </div>
                        </div>

                    </motion.div>

                    
                    
                    

                </div>
            
            <br />
            <br />
            
            
            
            <br /><br />

        </div>
    )


}


// I used Framer-motion Library to make the smooth animations.