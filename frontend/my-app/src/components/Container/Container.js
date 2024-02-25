import React from 'react'
import "./Container.css"
import Chat from '../Chat/Chat'

const Container = () => {
  return (
    <div className='container'>
      <div className='chat__container'>
        <Chat/>
      </div>
    </div>
  )
}

export default Container