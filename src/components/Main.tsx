import { useState } from 'react'
import './App.css'
import Logo from './assets/logo.png'
import { ArchiveIcon, BagIcon } from '@phosphor-icons/react'


function Main() {

  return (
    <>
    <div>

    <img id='logo' src={Logo} alt="Logo"/>

      <div id='container-main'>
       
        <div id='button-main'>
          <ArchiveIcon size={50} color='black'/>
           <text>Estoque</text>
        </div>

         <div id='button-main'>
          <BagIcon size={50} color='black'/>
           <text>Vendas</text>
        </div>
        
      </div>

      </div>
    </>
  )
}

export default Main
