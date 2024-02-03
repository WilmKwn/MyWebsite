import React, { useState } from 'react'

import muqu from '../assets/muqu.png';
import car from '../assets/car.png';
import fantasybets from '../assets/fantasybets.png';

const Projects = () => {
  const projects = [
    { name: 'MuQu (Music Queuer)', image: muqu, link: 'https://github.com/WilmKwn/MuQuAWS' },
    { name: '3D Racing Simulator', image: car, link: 'https://github.com/WilmKwn/CarSimulation' },
    { name: 'Fantasy Bets', image: fantasybets, link: 'https://github.com/WilmKwn/Gamblr' },
  ];

  const [desc, setDesc] = useState(false);

  return (
    <div name='Projects' className='w-full h-screen bg-gradient-to-b from-gray-800 to-gray-500 text-white'>
      <div className='max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full'>

        <div className='pb-8 mt-52'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>My Projects</p>
        </div>

        <div className='w-full h-full flex justify-between items-center mt-10'>
          {projects.map(({name, image, link}) => (
            <div className='w-full h-full flex flex-col rounded-lg items-center px-4'>
              <p className='text-2xl inline border-b-4 border-gray-500 pb-1'>{name}</p>
              <img onClick={() => {setDesc(true)}} src={image} alt='' className='rounded-2xl bg-gray-300 w-full h-3/5 mt-4 hover:scale-105 duration-200' />
              <button onClick={() => {window.open(link, '_blank')}} className='w-full bg-gray-900 mt-3 text-2xl rounded-xl p-1 hover:scale-105 duration-200'>
                Github
              </button>
            </div>
          ))}
        </div>

        {desc && (
          <div className='fixed w-full h-full top-0 left-0 flex justify-center items-center'>
            <div className={`z-10 w-3/4 h-3/4 mt-10 rounded-3xl bg-gray-400 bg-opacity-90 transition-transform duration-300 ${desc ? 'scale-100' : 'scale-0'}`}>
              <div className='absolute top-3 right-5'>
                <button className='text-white text-3xl' onClick={() => setDesc(false)}>X</button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

export default Projects
