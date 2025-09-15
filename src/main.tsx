import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Todoapp } from './components/TodoApp'
import './style.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Todoapp></Todoapp>
  </StrictMode>,
)
