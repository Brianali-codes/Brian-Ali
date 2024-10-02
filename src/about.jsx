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
                >
                    <p className="text-black dark:text-white">
                        As a Coder, I am up to date with the latest technologies and am equipped with the right tech stack for my respective field of work.
                    </p>
                    <br />
                    <p className="text-black dark:text-white">Some of my most used languages include:</p>
                    <br />
                    <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=gamerfunky78&theme=merko&show_icons=true&hide_border=true&layout=compact" alt="" />
                    <br />
                    <p className="text-black dark:text-white">And my Progress:</p>
                    <br />
                    <img src="https://github-profile-trophy.vercel.app/?username=gamerfunky78&theme=onedark" alt="GitHub Trophy" id="TPS" />
                    <br />
                    <p className="text-black dark:text-white">Other Frameworks, Libraries, and tools that I use include:</p>
                    <br />
                    <div className="flex flex-row gap-3" id="BADGES">
                        <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="" />
                        <img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="" />
                        <img src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white" alt="" />
                        <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="" />
                        <img src="https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white" alt="" />
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}
