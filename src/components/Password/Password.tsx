import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Dashboard from "../Dashboard/Dashboard"
import "./password.css"
const STORED_HASH = "89f2ab9c6cede4bbee15778e1820a0a5404e67447094699c4380eabc82003e4f"

type PopupProps = {
  onClose: () => void
  children?: React.ReactNode
}

async function hashPassword(password: string) {
  const encoder = new TextEncoder()
  const data = encoder.encode(password)

  const hashBuffer = await crypto.subtle.digest("SHA-256", data)
  const hashArray = Array.from(new Uint8Array(hashBuffer))

  return hashArray.map(b => b.toString(16).padStart(2, "0")).join("")
}


export default function Password({ onClose, children }: PopupProps) {
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()

   const handleLogin = async () => {
    const inputHash = await hashPassword(password)

    if (inputHash === STORED_HASH) {
      navigate("/Dashboard")
    } else {
      setError("Senha incorreta. Tente novamente.")
    }
  }
  
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose()
      }
    }

    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [onClose])

  return (
    <div id="bg-password">
    <div id="container-password">
      <div id="header-password">
          <text>Insira sua senha:</text>
        <button id="close-btn" onClick={onClose}>
          ✕
        </button>

      </div>
        
        <input value={password} placeholder="Insira sua senha aqui:" onChange={(e) => setPassword(e.target.value)} type="password" id="text-password"></input>
        <button id="enter-btn" onClick={handleLogin}>Entrar</button>
      {error && <p>{error}</p>}
    </div>
    </div>
  )
}

