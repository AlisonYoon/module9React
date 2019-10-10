import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';  // (./) means same level
import Greg from './components/Greg/Greg' //don't need here when Greg is imported in Shiela.js
import Shiela from './components/Shiela/Shiela'
import Layout from './components/Layout/Layout.'
import SimpleSlider from './components/Slider/Slider'
import OldBinding from "./components/Thiskeyword/Thiskeyword";
import Parent from "./components/Parent/Parent";
import * as serviceWorker from './serviceWorker';

let obj = {
    silly: 'billy'
}

let fun = () => {
    console.log('oh what fun')
}

ReactDOM.render(<Parent />, document.getElementById('root'));
// ReactDOM.render(<OldBinding bing="bong" gong={obj} func={fun} />, document.getElementById('root'));
// To access fun() function with props, you need to use attribute name which is "func" here.

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


// function coinToss () {
//     // Randomly return either 'heads' or 'tails'.
//     return Math.random() < 0.5 ? 'heads' : 'tails'
// }
//
// const pics = {
//     kitty: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg',
//     doggy: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg'
// }
//
// const img = <img src={ pics[coinToss() === 'heads' ? 'kitty' : 'doggy'] } />
//
// ReactDOM.render(img, document.getElementById('root'));