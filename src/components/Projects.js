import React, { useState } from 'react'

import muqu from '../assets/muqu.png';
import car from '../assets/car.png';
import fantasybets from '../assets/fantasybets.png';

import muqudemo from '../assets/muqudemo.gif';
import cardemo from '../assets/cardemo.gif';
import fantasybetsdemo from '../assets/fantasybetsdemo.gif'

const Projects = () => {
  const projects = [
    { name: 'MuQu (Music Queuer)', image: muqu, link: 'https://github.com/WilmKwn/MuQuAWS', demo: muqudemo, 
      description: [
        'Since people have different music streaming services, it is not a smooth process to unitedly queue and play music for everyone in the room.',
        'This website solves that problem as it requires no sign-ins and anyone from anywhere can queue songs if they can find a YouTube link for it.',
        'Used React.js for the frontend aspect of the website; It shows the currently playing video at the top and the queued video links underneath.',
        'Used AWS Services such as API Gateway, Lambda, and DynamoDB to create fully serverless application. Used RESTful and WebSocket API Gateways to handle CRUD requests and synchronize real-time updates, respectively.'
      ]},
    { name: '3D Racing Simulator', image: car, link: 'https://github.com/WilmKwn/CarSimulation', demo: cardemo, 
      description: [
        "The project simulates a car driving through a race track in a 3-dimensional space. Once the car crosses the finish line, the user's race time is shown.",
        'Desktop application written in C++. Used Win32 API to create the application window and to access keyboard and mouse input.',
        'Used Direct2D and Direct3D libraries for the menu screen and the simulation itself, respectively.',
      ]},
    { name: 'Fantasy Bets', image: fantasybets, link: 'https://github.com/WilmKwn/Gamblr', demo: fantasybetsdemo, 
      description: [
        'Mobile app that allows users to create any custom bet to bet on with other users. Friends and family could bet on random things like "Is it going to snow in exactly 23 days?"',
        'Implemented the application with React Native and Expo build tools.',
        'Created the back-end with Node.js and linked Google Firebase to manage synchronous data.'
      ]},
  ];

  const [desc, setDesc] = useState(false);
  const [projectIndex, setProjectIndex] = useState(-1);

  return (
    <div name='Projects' className='w-full h-screen bg-gradient-to-b from-gray-800 to-gray-500 text-white'>
      <div className='max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full'>

        <div className='pb-8 mt-52'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>My Projects</p>
        </div>

        <div className='w-full h-full flex justify-between items-center mt-10'>
          {projects.map(({name, image, link}, index) => (
            <div className='w-full h-full flex flex-col rounded-lg items-center px-4'>
              <p className='text-2xl inline border-b-4 border-gray-500 pb-1'>{name}</p>
              <img onClick={() => {setDesc(true); setProjectIndex(index)}} src={image} alt='' className='rounded-2xl bg-gray-300 w-full h-3/5 mt-4 hover:scale-105 duration-200' />
              <button onClick={() => {window.open(link, '_blank')}} className='w-full bg-gray-900 mt-3 text-2xl rounded-xl p-1 hover:scale-105 duration-200'>
                Github
              </button>
            </div>
          ))}
        </div>

        {desc && (
          <div className={`fixed w-full h-full top-0 left-0 flex justify-center items-center ${desc ? 'visible' : 'invisible'}`}>
            <div className={`flex items-center justify-center z-3 w-3/4 h-3/4 mt-10 rounded-3xl bg-gray-400 bg-opacity-90 transition-transform duration-300 scale-${desc ? '100' : '0'}`}>
              <div className='absolute right-52 top-32 z-5'>
                <button className='text-white text-3xl' onClick={() => setDesc(false)}>X</button>
              </div>
              <img src={projects[projectIndex].demo} alt='' className='rounded-2xl bg-gray-300 w-1/2 h-1/2 mr-5 ml-5' />
              <div className='pr-2 bg-gray-500 rounded-3xl mr-5'>
                {projects[projectIndex].description.map((line) => (
                  <p className='text-2xl text-white pt-3 pb-4 pl-3'>{line}</p>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

export default Projects
