import { motion } from 'framer-motion';

export default function About() {
    return (
        <motion.div
            id="ABOUT"
            className="flex flex-col justify-center items-center"
            initial={{ opacity: 0, y: 20 }} // Starting position
            whileInView={{ opacity: 1, y: 0 }} // Ending position when in view
            transition={{ duration: 1 }} // Transition duration
            viewport={{ once: true }} // Animation happens only once when it comes into view
        >
            <p className="ABT text-cyan-400">About Me</p>
            <br />
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
                    
                    <br />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }} // Starting position
                        whileInView={{ opacity: 1, y: 0 }} // Ending position when in view
                        transition={{ duration: 0.7 }} // Transition duration
                        viewport={{ once: true }}
                    
                    >
                         <p className="text-black dark:text-white">Some of my most used languages include:</p>
                    </motion.div>
                   
                    <br />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }} // Starting position
                        whileInView={{ opacity: 1, y: 0 }} // Ending position when in view
                        transition={{ duration: 0.8 }} // Transition duration
                        viewport={{ once: true }}
                    
                    >
                            <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=gamerfunky78&theme=merko&show_icons=true&hide_border=true&layout=compact" alt="" />
                    </motion.div>

                    
                    <br />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }} // Starting position
                        whileInView={{ opacity: 1, y: 0 }} // Ending position when in view
                        transition={{ duration: 0.9 }} // Transition duration
                        viewport={{ once: true }}
                        
                    >
                        <p className="text-black dark:text-white">And my Progress:</p>
                    </motion.div>
                    
                    <br />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }} // Starting position
                        whileInView={{ opacity: 1, y: 0 }} // Ending position when in view
                        transition={{ duration: 1 }} // Transition duration
                        viewport={{ once: true }}
                    
                    >
                        <img src="https://github-profile-trophy.vercel.app/?username=gamerfunky78&theme=onedark" alt="GitHub Trophy" id="TPS" />

                    </motion.div>

                    
                    <br />


                    <motion.div
                        initial={{ opacity: 0, y: 20 }} // Starting position
                        whileInView={{ opacity: 1, y: 0 }} // Ending position when in view
                        transition={{ duration: 1.1 }} // Transition duration
                        viewport={{ once: true }}
                    
                    >

                    <p className="text-black dark:text-white">Other Frameworks, Libraries, and tools that I use include:</p>
                    </motion.div>
                    
                    <br />

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
                            transition={{ duration: 1}} // Transition duration
                            viewport={{ once: true }}src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="" />
                        <motion.img 
                            initial={{ opacity: 0, y: 20 }} // Starting position
                            whileInView={{ opacity: 1, y: 0 }} // Ending position when in view
                            transition={{ duration: 1}} // Transition duration
                            viewport={{ once: true }} src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="" />
                        <motion.img 
                            initial={{ opacity: 0, y: 30 }} // Starting position
                            whileInView={{ opacity: 1, y: 0 }} // Ending position when in view
                            transition={{ duration: 1}} // Transition duration
                            viewport={{ once: true }} src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white" alt="" />
                        <motion.img 
                            initial={{ opacity: 0, y: 40 }} // Starting position
                            whileInView={{ opacity: 1, y: 0 }} // Ending position when in view
                            transition={{ duration: 1}} // Transition duration
                            viewport={{ once: true }}src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="" />
                        <motion.img 
                            initial={{ opacity: 0, y: 50 }} // Starting position
                            whileInView={{ opacity: 1, y: 0 }} // Ending position when in view
                            transition={{ duration: 1}} // Transition duration
                            viewport={{ once: true }} src="https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white" alt="" />
                        <motion.img 
                            initial={{ opacity: 0, y: 60 }} // Starting position
                            whileInView={{ opacity: 1, y: 0 }} // Ending position when in view
                            transition={{ duration: 1}} // Transition duration
                            viewport={{ once: true }} src="https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF&style=flat-square" alt="" />
                    
                    </div>

                    </motion.div>
                    <br />
                    <motion.div
                        initial={{ opacity: 0, y: 70 }} // Starting position
                        whileInView={{ opacity: 1, y: 0 }} // Ending position when in view
                        transition={{ duration: 0.9 }} // Transition duration
                        viewport={{ once: true}} // Animation happens only once when it comes into view
                    >
                        <motion.p
                            className='Desc'
                            initial={{ opacity: 0, y: 70 }} // Starting position
                            whileInView={{ opacity: 1, y: 0 }} // Ending position when in view
                            transition={{ duration: 0.3 }} // Transition duration
                            viewport={{ once: true}} // Animation happens only once when it comes into view
                        >
                            Iam also Consistent as i aspire to make better applications here are my stats:
                        </motion.p>
                        <img src="https://github-readme-stats.vercel.app/api?username=gamerfunky78&theme=merko&show_icons=true&hide_border=true&count_private=true" alt="" />
                    </motion.div>
                    <motion.div 
                        className="bg-transparent flex flex-col justify-center items-center"
                        initial={{ opacity: 0, y: 70 }} // Starting position
                        whileInView={{ opacity: 1, y: 0 }} // Ending position when in view
                        transition={{ duration: 0.9 }} // Transition duration
                        viewport={{ once: true}} // Animation happens only once when it comes into view
                    >
                        <p className='text-black dark:text-white text-center'>My Hobbies are <span className='text-cyan-400'>Casual Gaming, Watching Movies and VideoGame Hunting</span>.</p>
                    </motion.div>

                </motion.div>
            </div>
        </motion.div>
    );
}
