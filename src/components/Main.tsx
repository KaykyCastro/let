import { ContextType, useState } from 'react'
import '../App.css'
import Logo from '../assets/logo.png'
import { ArchiveIcon, BagIcon } from '@phosphor-icons/react'
import Password from './Password/Password'
import { useOutletContext } from 'react-router-dom'

function Main() {
  const [Open, setOpen] = useState(false)
  
  return (
    <>
    <div>
      
    <img id='logo' src={Logo} alt="Logo"/>

     {Open && (
      <Password onClose={() => setOpen(false)}/>
    )}

      <div id='container-main'>
      
        <button onClick={()=> setOpen(true)} id='button-main'>
          <ArchiveIcon size={50} color='black'/>
           <text>Estoque</text>
        </button>

         <button id='button-main'>
          <BagIcon size={50} color='black'/>
           <text>Vendas</text>
        </button>
        
      </div>

      </div>
    </>
  )
}

export default Main
