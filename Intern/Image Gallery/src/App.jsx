import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Gallery from './components/Gallery'

function App() {

  return (
    <>
      <h1 style={{TextAlign:'center'}}>Image Gallery</h1>
      <Gallery />
    </>
  )
}

export default App
