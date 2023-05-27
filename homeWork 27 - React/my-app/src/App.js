import myImage from './images/1200px-Paw-print2.svg.png';
import './App.css';

import React from 'react';

const App = () => {
    return (
        <div className="app">
            <header>
                <a className="logo" href="#">Cute Puppies Express!</a>
            </header>
            <div className="container">
                <main className="main-content">
                    <section>
                        <h1>Find Your Puppy, Completely Free!</h1>
                        <p>Finding your puppy is completely free, easy, and it only takes a few minutes to sign up..</p>
                        <p>Since 2003, this site has been linking people like you to the perfect puppy, from sellers across the country. </p>
                        <p>Scroll down the page to see the result.</p>
                        <p>Some text to enable scrolling.. </p>
                    </section>
                    <section>
                        <nav className="sidenav">
                    <ul>
                        <li>
                            <img className="myImage" src={myImage}></img>
                        </li>
                        <li>
                            <a href="/about">About</a>
                        </li>
                        <li>
                            <a href="/services">Services</a>
                        </li>
                        <li>
                            <a href="/clients">Clients</a>
                        </li>
                        <li>
                            <a href="/contact">Contact</a>
                        </li>
                    </ul>
                </nav>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default App;
