import React from 'react'
import ReactDOM from 'react-dom/client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome } from '@fortawesome/free-solid-svg-icons'
import './assets/css/main-style.css'

function Header(props){
  const header = props.content;

  return (
    <>
      <header>{header}</header>
    </>
  )
}

function Footer(props){
  const footer = props.content;

  return (
    <>
      <footer>{footer} - {props.date}</footer>
    </>
  )
}

function Content(props){
  const date = new Date();

  return (
    <>
      <Header content="Ana Başlık"/>
      <h2><FontAwesomeIcon icon={faHome} /> {props.title}</h2>
      <p><FontAwesomeIcon icon={faEnvelope} />{props.content}</p>
      <span>{props.date}</span>
      <Footer content="&copy; Copyright" date={date.toLocaleString("tr-TR",{timeZone:"UTC"})}/>
    </>
  )
}

function Image(props){

  const srcPath = "./images/" + props.src; // profile-picture-3.jpg
  const alt = props.alt;

  return (
    <>
      <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={srcPath} alt={alt}/>
    </>
  )
}

function Profile(props){
  return (
    <>
      <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{props.name}</h5>
      <span className="text-sm text-gray-500 dark:text-gray-400">{props.age}</span>
    </>
  )
}

function ProfileItem(props){
  return (
    <>
      <div className="flex flex-col items-center pb-10 px-4 pt-4">
        <Image src={props.src} alt={props.src}/>
        <Profile name={props.name} age={props.age} />
      </div>
    </>
  )
}

function ProfileCard(){
  return (
    <>
      <div key="1" className='w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700'>
        <ProfileItem name="Neil Sims" age="28" src="profile-picture-1.jpg" alt="Neil image"  />
      </div>
      <div key="2" className='w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700'>
        <ProfileItem name="Michael Gough" age="32" src="profile-picture-2.jpg" alt="Michael image"  />
      </div>
      <div key="3" className='w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700'>
        <ProfileItem name="Bonnie Green" age="27" src="profile-picture-3.jpg" alt="Bonnie image"  />
      </div>
    </>
  )
}

function App(){
  return (
  <>
    <h1 className='text-3xl font-bold underline'>Application</h1>
    <p>Merhaba bu bir App fonksiyon bileşenidir...</p>
    <p>Aşağıda gördünüğünüz içerikler iç içe fonksiyon bileşenlerdir.</p>
    <Content title="İçerik Başlık Test" content="Bu bir içeriktir" date="12/08/2025 15:00" />
    <ProfileCard />
  </>
  )
}

export default App;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
