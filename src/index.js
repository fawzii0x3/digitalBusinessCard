import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'
import mypimg from './images/mypimg.jpg'
import Main from './components/Main'
import Footer from './components/Footer'

const App =()=>{return (
    <div className="">
        <img className="myImg" src={mypimg} alt="my image" />
        <Main />
        <Footer />
    </div>
)};



ReactDOM.render(<App />,document.querySelector('#root'));