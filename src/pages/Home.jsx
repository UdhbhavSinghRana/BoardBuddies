import React from 'react'
import Canvas from '../pages/Canvas'
import Lobby from './Lobby'
import ChatRoom from './ChatRoom'
import Word from './Word'


function Home() {
  document.getElementById('root').className="h-screen "
  return (
    <>
    <div className='flex h-full my-10 flex-col'>
      <div className=' h-5/6 pl-10 flex py-14 '>
        <Lobby />
        <Canvas />
        <ChatRoom />
      </div>
    </div>
    </>
  )

}

export default Home