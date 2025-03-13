import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';


export default function Footer() {
    return (
        <footer id="Contacts" className="bg-black h-60 flex flex-col justify-between p-2 m-0">
            <div className="flex flex-row justify-center">
                <p className="text-white Desc">CONTACT ME:</p>
            </div>

            <div className="flex flex-row justify-center gap-4">
            <a href="https://www.instagram.com/luh_bryxe" target='_blank'><FontAwesomeIcon icon={faInstagram} size="2x" className='text-white hover:text-cyan-400 hover:cursor-pointer' /></a>
            <a href="https://github.com/brianali-codes" target='_blank'><FontAwesomeIcon icon={faGithub} size="2x" className='text-white hover:text-cyan-400 hover:cursor-pointer'/></a>
            <FontAwesomeIcon icon={faEnvelope} size="2x" className='text-white hover:text-cyan-400 hover:cursor-pointer'/>
        
            </div>

            <div className="flex flex-row justify-center">
                <p className="text-white Desc"> Brian Ali | All rights reserved | © 2025 </p>
            </div>
        </footer>
    )
}
