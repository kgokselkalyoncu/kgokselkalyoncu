import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

function Header(props){
  const header = props.content;

  return (
    <React.Fragment>
      <header>{header}</header>
    </React.Fragment>
  )
}


function Footer(props){
  const footer = props.content;

  return (
    <React.Fragment>
      <footer>{footer} - {props.date}</footer>
    </React.Fragment>
  )
}

function Content(props){
  const date = new Date();

  return (
    <React.Fragment>
      <Header content="Ana Başlık"/>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <span>{props.date}</span>
      <Footer content="&copy; Copyright" date={date.toLocaleString("tr-TR",{timeZone:"UTC"})}/>
    </React.Fragment>
  )
}

function App(){
  return (
  <React.Fragment>
    <h1>Application</h1>
    <p>Merhaba bu bir App fonksiyon bileşenidir.</p>
    <p>Aşağıda gördünüğünüz içerikler iç içe fonksiyon bileşenlerdir.</p>
    <Content title="İçerik Başlık" content="Bu bir içeriktir" date="12/08/2025 15:00" />
  </React.Fragment>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
