import CH from './assets/COOKHAVEN.webp'
import GG from './assets/GUAP.webp'
import FW from './assets/FRESCO.webp'
import IG from './assets/IG.webp'
import MS from './assets/MS.webp'
import { motion } from 'framer-motion'
import QTC from './assets/QUICK.webp'
import bgz from './assets/BGZAP.webp'
import OT from './assets/OT.webp'
import { useState } from 'react'
import PhoneCarousel from './components/phoneCarousel'
import S1 from './assets/Shiori1.jpeg'
import S2 from './assets/Shiori2.jpeg'
import S3 from './assets/Shiori3.jpeg'
import S4 from './assets/Shiori4.jpeg'
import S5 from './assets/Shiori5.jpeg'
import F1 from './assets/Frapp1.jpeg'
import F2 from './assets/Frapp2.jpeg'
import F3 from './assets/Frapp3.jpeg'
import F4 from './assets/Frapp4.jpeg'
import F5 from './assets/Frapp5.jpeg'

export default function Projects() {

    const shioriImages = [S1,S2,S3,S4,S5];
    const FrappImages = [F1,F2,F3,F4,F5];

    const [url, setUrl] = useState('https://quicktechcollege.netlify.app')
    const [lineColor, setLineColor] = useState('CyanPulse')


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
                    initial={{ opacity: 0, scale: 0.5, y:50 }} // Starting position
                    whileInView={{ opacity: 1,scale: 1, y: 0 }} // Ending position when in view
                    transition={{ duration: 1 }} // Transition duration
                    viewport={{ once: true }} // Animation happens only once when it comes into view
                >

                    <div class="project">

                        <img src={QTC} alt="Project Image" />

                        <div class="project-info flex flex-col">
                            <p className='text-center Desc2'>Quick Tech College</p>
                            <br />
                            <p className='Desc2'>I worked as the Front-end Developer For the Quick-Tech College Website. </p>
                            <br />
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

                        <img src={GG} alt="Project Image" />

                        <div class="project-info flex flex-col">
                            <p className='text-center Desc2'>Frapp</p>
                            <br />
                            <p className='Desc2'>As a video game enthusiast i keep my eye on new video game giveaways, this website uses an API that does exactly that.</p>
                            <br />
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
                            <br />
                            <p className='Desc2'>This is a wallpaper APP, it uses a Wallpaper Fetching API for the content it delivers, the content is mainly anime related.</p>
                            <br />
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
                            <br />
                            <p className='Desc2'>This is a website that allows you to download mp4 files from instagram and save them locally, it also uses an API. </p>
                            <br />
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
                            <br />
                            <p className='Desc2'>This is A recipe web-app, Searches For recipes and results are rendered dynamically using the power of React.js.</p>
                            <br />
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
                            <br />
                            <p className='Desc2'>This is a website that allows you to Generate Memes From Open source APis. </p>
                            <br />
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
                            <br />
                            <p className='Desc2'>This is a website that allows you to Remove backgrounds From images . </p>
                            <br />
                            <a href="https://bgzap.netlify.app/" target='_blank'><p className='GO'>Go to website</p></a>
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

                        <img src={OT} alt="Project Image" />

                        <div class="project-info flex flex-col">
                            <p className='text-center Desc2'>OtakuPulseNews</p>
                            <br />
                            <p className='Desc2'>This is a website that allows you toget the latest anime news from Crunchyroll. </p>
                            <br />
                            <a href="https://otakupulsenews.netlify.app/" target='_blank'><p className='GO'>Go to website</p></a>
                        </div>
                    </div>

                </motion.div>





            </div>

            <br />
            <br />
            <div>
                
            </div>

            <div className='p-7 Response'>
                <p className='Desc'>As a front-end developer website responsiveness is key, Using the Device below feel free to explore the provided websites.</p>
            </div>
           
           <div>
            <a href="https://github.com/Brianali-codes?tab=repositories" target='_blank'><button className='rounded-xl bg-cyan-500 Desc p-5 hover:bg-cyan-200 transition-transform'>See More Projects.</button></a>
           </div>

            <br /><br />

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

            
            <br />
            <br />
            
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
