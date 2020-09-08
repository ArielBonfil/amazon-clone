import React from 'react'
import Header from './Header'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <img className="home__banner"
                src="https://dummyimage.com/1280x720/ffa500/fff.png&text=Banner"
                alt="banner imagen"
            />
            <div className="home__row">
                <Product
                    id="123124"
                    title="producto prueba"
                    price={20}
                    rating={3}
                    image={"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"}
                />
                <Product
                    id="123124"
                    title="producto prueba"
                    price={10}
                    rating={4}
                    image={"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"}
                />
                <Product
                    id="123124"
                    title="producto prueba"
                    price={55.4}
                    rating={4}
                    image={"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"}
                />
                <Product
                    id="123124"
                    title="producto prueba"
                    price={3.09}
                    rating={2}
                    image={"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"}
                />
            </div>



            </div>
            )
}

export default Home
