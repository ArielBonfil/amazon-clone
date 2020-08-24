import React from 'react'
import Header from './Header'
import './Home.css'
function Home() {
    return (
        <div className="home">
            <Header />
            <img className="home__banner"
                src="https://dummyimage.com/1280x720/ffa500/fff.png&text=Banner"
                alt="banner imagen"

            />
        </div>
    )
}

export default Home
