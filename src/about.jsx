import { motion } from 'framer-motion';
import Experience from './experience';
import Button2 from './components/button2';
import myPDF from './assets/brianaliresume.pdf';



export default function About() {
    return (
        <motion.div
            id="ABOUT"
            className="flex flex-col justify-center items-center p-5 dark:bg-black m-7 rounded-2xl"
            initial={{ opacity: 0, x: 0 }} // Starting position
            whileInView={{ opacity: 1, x: 0 }} // Ending position when in view
            transition={{ duration: 1 }} // Transition duration
            viewport={{ once: true }} // Animation happens only once when it comes into view
        >
            <div className='h-5'></div><br />
            <p className="ABT text-cyan-400 Desc">About Me</p>

            <div className='h-5'></div>
            <div className='h-5'></div>
            <div className="flex flex-row">
                <motion.div
                    className="HS2"
                    id="ABTPROJECTS"
                    initial={{ opacity: 0, y: 20 }} // Starting position
                    whileInView={{ opacity: 1, y: 0 }} // Ending position when in view
                    transition={{ duration: 0.5 }} // Transition duration
                    viewport={{ once: true }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }} // Starting position
                        whileInView={{ opacity: 1, y: 0 }} // Ending position when in view
                        transition={{ duration: 0.6 }} // Transition duration
                        viewport={{ once: true }}

                    >
                        <p className="text-black dark:text-white">
                            As a Coder, I am up to date with the latest technologies and am equipped with the right tech stack for my respective field of work.

                        </p>
                    </motion.div>

                    <div className='h-5'></div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }} // Starting position
                        whileInView={{ opacity: 1, y: 0 }} // Ending position when in view
                        transition={{ duration: 0.7 }} // Transition duration
                        viewport={{ once: true }}

                    >
                        <p className="text-black dark:text-white">Some of my most used languages include:</p>
                    </motion.div>

                    <div className='h-5'></div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }} // Starting position
                        whileInView={{ opacity: 1, y: 0 }} // Ending position when in view
                        transition={{ duration: 0.8 }} // Transition duration
                        viewport={{ once: true }}
                    >
                        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Brianali-codes&theme=merko&show_icons=true&hide_border=true&layout=compact" alt="" />
                    </motion.div>


                    <div className='h-5'></div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }} // Starting position
                        whileInView={{ opacity: 1, y: 0 }} // Ending position when in view
                        transition={{ duration: 0.9 }} // Transition duration
                        viewport={{ once: true }}

                    >
                        <p className="text-black dark:text-white">And my Progress:</p>
                    </motion.div>

                    <div className='h-5'></div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }} // Starting position
                        whileInView={{ opacity: 1, y: 0 }} // Ending position when in view
                        transition={{ duration: 1 }} // Transition duration
                        viewport={{ once: true }}
                    >
                        <img src="https://github-profile-trophy.vercel.app/?username=Brianali-codes&theme=onedark" alt="GitHub Trophy" id="TPS" />

                    </motion.div>


                    <div className='h-5'></div>


                    <motion.div
                        initial={{ opacity: 0, y: 20 }} // Starting position
                        whileInView={{ opacity: 1, y: 0 }} // Ending position when in view
                        transition={{ duration: 1.1 }} // Transition duration
                        viewport={{ once: true }}

                    >

                        <p className="text-black dark:text-white">Other Frameworks, Libraries, and tools that I use include:</p>
                    </motion.div>

                    <div className='h-5'></div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }} // Starting position
                        whileInView={{ opacity: 1, y: 0 }} // Ending position when in view
                        transition={{ duration: 1.2 }} // Transition duration
                        viewport={{ once: true }}

                    >
                        <div className="flex flex-row gap-3" id="BADGES">

                            <motion.img
                                initial={{ opacity: 0, y: 10 }} // Starting position
                                whileInView={{ opacity: 1, y: 0 }} // Ending position when in view
                                transition={{ duration: 1 }} // Transition duration
                                viewport={{ once: true }} src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="" />
                            <motion.img
                                initial={{ opacity: 0, y: 20 }} // Starting position
                                whileInView={{ opacity: 1, y: 0 }} // Ending position when in view
                                transition={{ duration: 1 }} // Transition duration
                                viewport={{ once: true }} src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="" />
                            <motion.img
                                initial={{ opacity: 0, y: 30 }} // Starting position
                                whileInView={{ opacity: 1, y: 0 }} // Ending position when in view
                                transition={{ duration: 1 }} // Transition duration
                                viewport={{ once: true }} src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white" alt="" />
                            <motion.img
                                initial={{ opacity: 0, y: 40 }} // Starting position
                                whileInView={{ opacity: 1, y: 0 }} // Ending position when in view
                                transition={{ duration: 1 }} // Transition duration
                                viewport={{ once: true }} src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="" />
                            <motion.img
                                initial={{ opacity: 0, y: 50 }} // Starting position
                                whileInView={{ opacity: 1, y: 0 }} // Ending position when in view
                                transition={{ duration: 1 }} // Transition duration
                                viewport={{ once: true }} src="https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white" alt="" />
                            <motion.img
                                initial={{ opacity: 0, y: 60 }} // Starting position
                                whileInView={{ opacity: 1, y: 0 }} // Ending position when in view
                                transition={{ duration: 1 }} // Transition duration
                                viewport={{ once: true }} src="https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF&style=flat-square" alt="" />

                        </div>

                    </motion.div>
                    <div className='h-5'></div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }} // Starting position
                        whileInView={{ opacity: 1, y: 0 }} // Ending position when in view
                        transition={{ duration: 0.9 }} // Transition duration
                        viewport={{ once: true }} // Animation happens only once when it comes into view
                    >
                        <motion.p
                            className='Desc'
                            initial={{ opacity: 0, y: 70 }} // Starting position
                            whileInView={{ opacity: 1, y: 0 }} // Ending position when in view
                            transition={{ duration: 0.3 }} // Transition duration
                            viewport={{ once: true }} // Animation happens only once when it comes into view
                        >
                            Iam also Consistent as i aspire to make better applications here are my stats:
                        </motion.p>
                        <div className='h-5'></div>
                        <img src="https://github-readme-stats.vercel.app/api?username=Brianali-codes&theme=merko&show_icons=true&hide_border=true&count_private=true" alt="" />
                    </motion.div>
                    <div className='h-5'></div>
                    <p className='Desc text-lg font-bold text-start'>Work Experience.</p>
                    <div className='h-5'></div>
                    <motion.div
                        className="bg-transparent flex flex-col justify-center items-center"
                        initial={{ opacity: 0, y: 10 }} // Starting position
                        whileInView={{ opacity: 1, y: 0 }} // Ending position when in view
                        transition={{ duration: 0.9 }} // Transition duration
                        viewport={{ once: true }} // Animation happens only once when it comes into view
                    >


                        <Experience />

                        <motion.div
                            className="flex flex-col justify-center items-center h-fit"
                            initial={{ opacity: 0, y: 20 }} // Starting position
                            whileInView={{ opacity: 1, y: 0 }} // Ending position when in view
                            transition={{ duration: 1 }} // Transition duration
                            viewport={{ once: true }} // Animation happens only once when it comes into view
                        >
                            <p className='Desc text-black dark:text-white flex flex-col justify-center items-center gap-4' >For More Information<a href={myPDF} target='_blank'><Button2 btnName="Download my Resume" download/></a></p>
                        </motion.div>
                        <div className='h-5'>

                        </div>
                        <p className='text-black dark:text-white text-center'>My Hobbies are <span className='text-cyan-400'>Casual Gaming, Watching Movies and VideoGame Hunting</span>.</p>
                    </motion.div>
                    <div className='h-5'></div>
                </motion.div>
            </div>
        </motion.div>
    );
}
