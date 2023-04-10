import React from 'react'
import Canvas from '../pages/Canvas'
import Lobby from './Lobby'

function Home() {
  return (
    <div className='h-screen flex '>
      <Lobby />
      <Canvas />
    </div>
  )
}

export default Home