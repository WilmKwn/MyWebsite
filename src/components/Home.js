import React from 'react'

const Home = () => {
    return (
        <div name='Home' className='h-screen w-full bg-gradient-to-b from-gray-800 to-gray-500'>
            <div className='max-w-screen-lg mx-auto flex flex-row items-center justify-center h-full px-4'>
                <div className='flex flex-col justify-center hover:scale-105 duration-200'>
                    <h2 className='text-5xl font-bold text-white'>
                        10x Software Engineer
                    </h2>
                    <p className='text-lg text-gray-300 py-4 max-w-md mt-10'>
                        Fullstack Engineer | Mobile Engineer | Graphics Engineer
                    </p>
                </div>
                <div className='bg-gray-300 rounded-2xl mx-10 w-1/3 h-1/2 hover:scale-105 duration-200'>

                </div>
            </div>
        </div>
    )
}

export default Home