import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

function HelloReact()
{
  return <>
            <h1>Hello React</h1>
            <p>Bu ilk react app projesidir.</p>
         </>
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelloReact />
  </StrictMode>,
)
