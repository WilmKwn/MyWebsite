import React, { useState } from 'react'

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const submitted = (e) => {
    e.preventDefault();
    
    if (name!=='' && email!=='' && message!=='') {
      console.log(name, email, message);
    }
  }

  return (
    <div name='Contact' className='w-full h-screen bg-gradient-to-b from-gray-500 to-gray-800 text-white'>
      <div className='max-w-screen-lg px-4 mx-auto flex flex-col w-full h-full'>
        <div className='pb-8 mt-52'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact Me</p>
        </div>
        <div className='w-full h-full'>
          <form onSubmit={(e) => submitted(e)} className='flex flex-col h-full text-black'>
            <input onChange={(e) => {setName(e.target.value)}} type='text' name='name' placeholder='Enter Name' className='mb-3 p-4 rounded-md bg-gray-300' />
            <input onChange={(e) => {setEmail(e.target.value)}} type='text' name='email' placeholder='Enter Email' className='mb-3 p-4 rounded-md bg-gray-300' />
            <input onChange={(e) => {setMessage(e.target.value)}} type='text' name='message' placeholder='Enter Message' className='mb-3 p-4 h-1/3 rounded-xl bg-gray-300' />
            <button type='submit' name='submit' className='mb-2 p-3 rounded-xl bg-gray-400 text-gray-800 text-xl'>Send</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
