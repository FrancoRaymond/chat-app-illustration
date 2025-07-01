import React from 'react'
import avatar from './assets/images/avatar.jpg'
import dog1 from './assets/images/dog-image-1.jpg'
import dog2 from './assets/images/dog-image-2.jpg'
import dog3 from './assets/images/dog-image-3.jpg'

function App() {

  return (
    <div className='relative mainDiv flex justify-center'>
      <div className='phone'>
        <div className='border-[12px] border-white w-[320px] bg-[#f5f3f8] rounded-4xl'>
          <header className='p-3'>
            <div className='min-h-8 w-[60%] bg-white rounded-bl-3xl rounded-br-3xl mx-auto -mt-4'></div>
            <div className='flex items-center gap-2.5 mt-2.5'>
              <button className='font-bold text-white cursor-pointer'>{"<"}</button>
              <div className='flex items-center gap-2.5 grow'>
                <img src={avatar} alt="" className='size-10 rounded-full border-2 border-white'/>
                <div className='flex flex-col'>
                  <p className='text-white font-semibold text-[17px]'>Samuel Green</p>
                  <span className='text-sm text-gray-300 -mt-1'>Available to walk</span>
                </div>
              </div>
              <button className='flex flex-col gap-0.5 cursor-pointer'>
                <span className='size-1 bg-white rounded-full'></span>
                <span className='size-1 bg-white rounded-full'></span>
                <span className='size-1 bg-white rounded-full'></span>
              </button>
            </div>
          </header>
          <div className='px-3 text-left'>
            <article className='bg-[#ede5f2] text-sm text-[#8938ff] max-w-[70%] mt-4 p-2 rounded-tr-2xl rounded-tl-2xl rounded-br-2xl rounded-bl-md'>That sounds great. I’d be happy with that.</article>
            <article className='bg-[#ede5f2] text-sm text-[#8938ff] max-w-[70%] mt-2 p-2 rounded-tr-2xl rounded-tl-2xl rounded-br-2xl rounded-bl-md'>Could you send over some pictures of your dog, please?</article>
            <div className='flex gap-2 ml-auto w-fit mt-4'>
              <img src={dog1} alt="" className='size-12 rounded-2xl'/>
              <img src={dog2} alt="" className='size-12 rounded-2xl'/>
              <img src={dog3} alt="" className='size-12 rounded-2xl'/>
            </div>
            <article className='bg-white ml-auto text-sm text-gray-700 max-w-[70%] mt-2 p-2 rounded-tr-2xl rounded-tl-2xl rounded-br-md rounded-bl-2xl'>Here are a few pictures. She’s a happy girl!</article>
            <article className='bg-white ml-auto text-sm text-gray-700 max-w-[70%] mt-2 p-2 rounded-tr-2xl rounded-tl-2xl rounded-br-md rounded-bl-2xl'>Can you make it?</article>
            <article className='bg-[#ede5f2] text-sm text-[#8938ff] max-w-[70%] mt-4 p-2 rounded-tr-2xl rounded-tl-2xl rounded-br-2xl rounded-bl-md'>She looks so happy! The time we discussed works. How long shall I take her out for?</article>
            <article className='option flex gap-4 items-center max-w-[80%] mt-2 p-2 rounded-tr-2xl rounded-tl-2xl rounded-br-2xl rounded-bl-md'>
              <div className='size-4 rounded-full border-2 border-white '></div>
              <span className='text-sm text-gray-200 grow'>30 minute walk</span>
              <span className='text-white font-extrabold text-lg'>$29</span>
            </article>
            <article className='option flex gap-4 items-center max-w-[80%] mt-2 p-2 rounded-tr-2xl rounded-tl-2xl rounded-br-2xl rounded-bl-md'>
              <div className='size-4 rounded-full border-2 border-white '></div>
              <span className='text-sm text-gray-200 grow'>1 hour walk</span>
              <span className='text-white font-extrabold text-lg'>$49</span>
            </article>
          </div>
          <div className='flex items-center bg-white rounded-3xl mt-3 w-[90%] my-2 p-3 mx-auto'>
          <input type="text" className='text-sm text-gray-500 bg-white outline-0 grow' placeholder='Type a message...'/>
            <div className='size-7 rounded-full ml-2 bg-[#3d2754]'></div>
          </div>
        </div>
        <div>
          <h1 className='text-[#3d2754] font-semibold text-3xl text-center my-7'>Simple booking</h1>
          <p className='text-center text-gray-400 mb-10'>Stay in touch with our dog walkers through the chat interface. This makes it easy to discuss arrangements and make bookings. Once the walk has been completed you an rate your walker and book again all through the chat.</p>
        </div>
      </div>  
    </div>
  )
}

export default App;