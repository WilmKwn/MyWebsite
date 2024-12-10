import React from 'react';

import {Link} from 'react-scroll';

import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';

import resume from '../assets/resume.pdf';

const Navbar = () => {
    const links = [
        { id: 0, link: "Home"},
        { id: 1, link: "About"},
        { id: 2, link: "Projects"},
        { id: 3, link: "Contact"},
    ];

    const githubLink = 'https://github.com/WilmKwn';
    const linkedinLink = 'https://www.linkedin.com/in/wilmkwn';

    return (
        <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed z-10'>
            <div>
                <h1 className='text-5xl ml-2 cursor-pointer hover:scale-105 duration-200'>
                    <Link to="Home" smooth duration={400}>William Kwon</Link>
                </h1>
            </div>

            <ul className='flex text-xl cursor-pointer'>
                <img onClick={() => {window.open(githubLink, '_blank')}} src={github} className='w-16 px-4 hover:scale-125 duration-200' alt='' />
                <img onClick={() => {window.open(linkedinLink, '_blank')}} src={linkedin} className='w-16 px-4 hover:scale-125 duration-200' alt='' />
            </ul>

            <ul className='flex'>
                {links.map(({id, link}) => (
                    <li key={id} className='text-xl px-4 cursor-pointer text-gray-200 hover:scale-125 duration-200'>
                        <Link to={link} smooth duration={400}>{link}</Link>
                    </li>
                ))}
                <a className='text-xl px-4 cursor-pointer text-gray-200'>|</a>
                <a onClick={() => window.open(resume, '_blank')} className='text-xl px-4 cursor-pointer text-gray-200 hover:scale-125 duration-200'>Resume</a>
            </ul>

        </div>
    )
}

export default Navbar
