import CH from './assets/COOKHAVEN.webp'
import GG from './assets/GUAP.webp'
import FW from './assets/FRESCO.webp'
import IG from './assets/IG.webp'
import MS from './assets/MS.webp'
import { motion } from 'framer-motion'
import QTC from './assets/QUICK.webp'
import bgz from './assets/BGZAP.webp'
import RM from './assets/RM.png'
import { useState } from 'react'
import PhoneCarousel from './components/phoneCarousel'
import S1 from './assets/shioriA.jpeg'
import S2 from './assets/shioriB.jpeg'
import S3 from './assets/shioriC.jpeg'
import S4 from './assets/shioriD.jpeg'
import S5 from './assets/shioriE.jpeg'
import F1 from './assets/frappA.jpeg'
import F2 from './assets/frappB.jpeg'
import F3 from './assets/frappC.jpeg'
import F4 from './assets/frappD.jpeg'
import F5 from './assets/frappE.jpeg'

export default function Projects() {

    const shioriImages = [S1,S2,S3,S4,S5];
    const FrappImages = [F1,F2,F3,F4,F5];

    const [url, setUrl] = useState('https://quicktechcollege.netlify.app')
   

    return (
        <motion.div
            id='PROJECTS' className="flex flex-col justify-center items-center"
            initial={{ opacity: 0, X: -500 }} // Starting position
            whileInView={{ opacity: 1, X: 0 }} // Ending position when in view
            transition={{ duration: 3 }} // Transition duration
            viewport={{ once: true }} // Animation happens only once when it comes into view
        >

            <motion.p
                initial={{ opacity: 0, y: 50 }} // Starting position
                whileInView={{ opacity: 1, y: 0 }} // Ending position when in view
                transition={{ duration: 1 }} // Transition duration
                viewport={{ once: true }} // Animation happens only once when it comes into view
            >
                <p className="ABT text-cyan-400 Desc">My Projects.</p>
            </motion.p>

              <div className='h-5'></div>  <div className='h-5'></div>

            <motion.div
                initial={{ opacity: 0, y: 50 }} // Starting position
                whileInView={{ opacity: 1, y: 0 }} // Ending position when in view
                transition={{ duration: 1.1 }} // Transition duration
                viewport={{ once: true }} // Animation happens only once when it comes into view
            >

                <p className='Desc text-black dark:text-white'>Since 2023 i have been perfecting my skills and making user friendly applications that are interactive using my respective tech stack Some of the projects include:</p>
            </motion.div>

              <div className='h-5'></div>

            <div className="Project-container">

                <motion.div
                    initial={{ opacity: 0, scale: 0.5, y:50 }} // Starting position
                    whileInView={{ opacity: 1,scale: 1, y: 0 }} // Ending position when in view
                    transition={{ duration: 1 }} // Transition duration
                    viewport={{ once: true }} // Animation happens only once when it comes into view
                >

                    <div class="project">

                        <img src={QTC} alt="Project Image" />

                        <div class="project-info flex flex-col">
                            <p className='text-center Desc2'>Quick Tech College</p>
                              <div className='h-5'></div>
                            <p className='Desc2'>Quick tech computer college website.</p>
                              <div className='h-5'></div>
                            <a href="https://quicktechcollege.netlify.app/" target='_blank'><p className='GO'>Go to website</p></a>
                        </div>
                    </div>

                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.5, y:50 }} // Starting position
                    whileInView={{ opacity: 1,scale: 1, y: 0 }} // Ending position when in view
                    transition={{ duration: 1 }} // Transition duration
                    viewport={{ once: true }} // Animation happens only once when it comes into view
                >
                    <div class="project">

                        <img src={RM} alt="Project Image" />

                        <div class="project-info flex flex-col">
                            <p className='text-center Desc2'>Remaya</p>
                              <div className='h-5'></div>
                            <p className='Desc2'>A charity website made for the remaya NGO . </p>
                              <div className='h-5'></div>
                            <a href="https://remaya.netlify.app/" target='_blank'><p className='GO'>Go to website</p></a>
                        </div>
                    </div>

                </motion.div>


                <motion.div
                    initial={{ opacity: 0, scale: 0.5, y:50 }} // Starting position
                    whileInView={{ opacity: 1,scale: 1, y: 0 }} // Ending position when in view
                    transition={{ duration: 1 }} // Transition duration
                    viewport={{ once: true }} // Animation happens only once when it comes into view
                >
                    <div class="project">

                        <img src={GG} alt="Project Image" />

                        <div class="project-info flex flex-col">
                            <p className='text-center Desc2'>Frapp</p>
                              <div className='h-5'></div>
                            <p className='Desc2'>As a video game giveaways Tracker.</p>
                              <div className='h-5'></div>
                            <a href="https://frapp.netlify.app/" target='_blank'><p className='GO'>Go to website</p></a>
                        </div>
                    </div>

                </motion.div>


                <motion.div
                    initial={{ opacity: 0, scale: 0.5, y:50 }} // Starting position
                    whileInView={{ opacity: 1,scale: 1, y: 0 }} // Ending position when in view
                    transition={{ duration: 1 }} // Transition duration
                    viewport={{ once: true }} // Animation happens only once when it comes into view
                >
                    <div class="project">

                        <img src={FW} alt="Project Image" />

                        <div class="project-info flex flex-col">
                            <p className='text-center Desc2'>Fresco Wallpapers</p>
                              <div className='h-5'></div>
                            <p className='Desc2'>A High quality wallpaper website.</p>
                              <div className='h-5'></div>
                            <a href="https://frescowallpapers.netlify.app/" target='_blank'><p className='GO'>Go to website</p></a>
                        </div>
                    </div>

                </motion.div>


                <motion.div
                    initial={{ opacity: 0, scale: 0.5, y:50 }} // Starting position
                    whileInView={{ opacity: 1,scale: 1, y: 0 }} // Ending position when in view
                    transition={{ duration: 1 }} // Transition duration
                    viewport={{ once: true }} // Animation happens only once when it comes into view
                >
                    <div class="project">

                        <img src={IG} alt="Project Image" />

                        <div class="project-info flex flex-col">
                            <p className='text-center Desc2'>IG3s</p>
                              <div className='h-5'></div>
                            <p className='Desc2'>This is an IG video download website.</p>
                              <div className='h-5'></div>
                            <a href="https://ig3s.netlify.app/" target='_blank'><p className='GO'>Go to website</p></a>
                        </div>
                    </div>

                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.5, y:50 }} // Starting position
                    whileInView={{ opacity: 1,scale: 1, y: 0 }} // Ending position when in view
                    transition={{ duration: 1.2 }} // Transition duration
                    viewport={{ once: true }} // Animation happens only once when it comes into view
                >
                    <div class="project">

                        <img src={CH} alt="Project Image" />

                        <div class="project-info flex flex-col">
                            <p className='text-center Desc2'>CookHaven</p>
                              <div className='h-5'></div>
                            <p className='Desc2'>This is A recipe web-app for recipe fetching.</p>
                              <div className='h-5'></div>
                            <a href="https://cookhaven.netlify.app/" target='_blank'><p className='GO'>Go to website</p></a>
                        </div>
                    </div>

                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.5, y:50 }} // Starting position
                    whileInView={{ opacity: 1,scale: 1, y: 0 }} // Ending position when in view
                    transition={{ duration: 1 }} // Transition duration
                    viewport={{ once: true }} // Animation happens only once when it comes into view
                >
                    <div class="project">

                        <img src={MS} alt="Project Image" />

                        <div class="project-info flex flex-col">
                            <p className='text-center Desc2'>Memesplat</p>
                              <div className='h-5'></div>
                            <p className='Desc2'>This is a Meme generator and meme template site.</p>
                              <div className='h-5'></div>
                            <a href="https://memesplat.netlify.app/" target='_blank'><p className='GO'>Go to website</p></a>
                        </div>
                    </div>

                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.5, y:50 }} // Starting position
                    whileInView={{ opacity: 1,scale: 1, y: 0 }} // Ending position when in view
                    transition={{ duration: 1 }} // Transition duration
                    viewport={{ once: true }} // Animation happens only once when it comes into view
                >
                    <div class="project">

                        <img src={bgz} alt="Project Image" />

                        <div class="project-info flex flex-col">
                            <p className='text-center Desc2'>BGZap</p>
                              <div className='h-5'></div>
                            <p className='Desc2'>This is a Background remover website. </p>
                              <div className='h-5'></div>
                            <a href="https://bgzap.netlify.app/" target='_blank'><p className='GO'>Go to website</p></a>
                        </div>
                    </div>

                </motion.div>

               





            </div>

            <div className='h-5'></div>
            <div>
                
            </div>

            <div className='p-7 Response'>
                <p className='Desc'>As a front-end developer website responsiveness is key, Using the Device below feel free to explore the provided websites.</p>
            </div>
           
           <div>
            <a href="https://github.com/Brianali-codes?tab=repositories" target='_blank'><button className='rounded-xl bg-cyan-500 Desc p-5 hover:bg-cyan-200 transition-transform'>See More Projects.</button></a>
           </div>

              <div className='h-5'></div>  <div className='h-5'></div>

            <div className="Phone-body">
                <div className="phone-frame">
                    <div className="notch"></div>
                    <iframe src={url} width="100%" height="100%" title="Phone Webview"></iframe>
                </div>
                <div className="line line1"></div>
                <button className="button button1" onClick={() => setUrl('https://quicktechcollege.netlify.app')}>QuickTech college.</button>

                <div className="line line2"></div>
                <button className="button button2" onClick={() => setUrl('https://frescowallpapers.netlify.app')}>Fresco Wallpapers.</button>

                <div className="line line3"></div>
                <button className="button button3" onClick={() => setUrl('https://memesplat.netlify.app')}>Memesplat memes.</button>

                <div className="line line4"></div>
                <button className="button button4" onClick={() => setUrl('https://frapp.netlify.app')}>Frapp giveaways.</button>

                <div className="line line5"></div>
                <button className="button button5" onClick={() => setUrl('https://cookhaven.netlify.app')}>Cookhaven Recipes.</button>

                <div className="line line6"></div>
                <button className="button button6" onClick={() => setUrl('https://emeraldco.netlify.app')}>Emerald Consultation.</button>
            </div>

            
              <div className='h-5'></div>
              <div className='h-5'></div>
            
            <div className='h-5'></div>
            <p className='text-center Desc p-5'>Having experience in react.js also pushed me to make some mobile applications such as Frapp and Shiori, these are just some of my personal projects that helped me expand my knowledge as a frontend developer to other fields making me flexible.</p>
            
            <div className='mobile-proj'>
                <PhoneCarousel
                    title="Shiori Wallpaper App."
                    images={shioriImages}
                    viewOnGithubUrl="https://github.com/brianali-codes/shiori"
                />

                <PhoneCarousel
                    title="Frapp Mobile App."
                    images={FrappImages}
                    viewOnGithubUrl="https://github.com/brianali-codes/Frapp"
                />
            </div>  

        </motion.div>
    )


}


// I used Framer-motion Library to make the smooth animations.
