import React from 'react'

const About = () => {
  const roles = [
    { role: 'Incoming Fullstack Engineer Intern', org: 'GSA (General Services Administration)' },
    { role: 'Software Developer Apprentice', org: 'Sledgehammer Infosystems, Inc.' },
    { role: 'Software Intern', org: 'SCALE' },
    { role: 'Course Instructor', org: 'Purdue Computer Science' },
    { role: 'Undergraduate Teaching Assistant', org: 'Purdue Computer Science' },
  ]

  return (
    <div name='About' className='w-full h-screen bg-gradient-to-b from-gray-500 to-gray-800 text-white'>
      <div className='max-w-screen-lg px-4 mx-auto flex flex-col w-full h-full'>
        <div className='pb-8 mt-52'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-400'>About Me</p>
        </div>
        <div className='flex w-full h-full mt-4'>
          <div className='w-full h-3/4 bg-gray-300 mr-10 rounded-lg hover:scale-105 duration-200 font-bold'>
            <p className='text-xl text-black pt-2 pl-2 pb-2 border-b-2 border-gray-500'>This is Me</p>
            <p className='text-lg pt-2 pl-2 pb-4 text-gray-600'>
              Hi! I am an Undergraduate student studying CS at Purdue University who has unlimited passion for software engineering.  
            </p>
            <p className='text-lg pt-2 pl-2 pb-4 text-gray-600'>
              Experienced in fullstack web development, desktop app development, and mobile development. 
            </p>
            <p className='text-lg pt-2 pl-2 pb-4 text-gray-600'>
              I love participating in Hackathons and working on personal projects to better myself in the field and make creative ideas come to fruition. 
            </p>
          </div>
          <div className='w-full h-3/4 bg-gray-300 rounded-lg hover:scale-105 duration-200 font-bold'>
            <p className='text-xl text-black pt-2 pl-2 pb-2 border-b-2 border-gray-500'>Experience</p>

            {roles.map(({role, org}) => (
              <div className='flex flex-col justify-center items-center'>
                <p className='text-lg pt-2 text-gray-600'>
                  {role}
                </p>
                <p className='text-sm pb-2 text-gray-500'>
                  {org}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
