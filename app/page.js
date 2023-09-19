// page.js - This is the main page or root page that is reached when accessing this web app

import { store } from './redux/store'

export default function Home() {
  return (
    <>
      <div className="home-page-container">        
          <h2>Flashcards</h2>        
      </div>
    </>
  )
}