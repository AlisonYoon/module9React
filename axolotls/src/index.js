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
import Users from "./components/Users/Users";
import Contact from "./components/Contact/Contact";
import Notfound from "./components/Notfound/Notfound";
import * as serviceWorker from './serviceWorker';

import {Route, Link, BrowserRouter as Router, Switch} from 'react-router-dom';

class Rounting extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                         <li>
                         <Link to="/users">Users</Link>
                         </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                    <Switch>
                        <Route exact path="/" component={App}/>
                        <Route path = "/users" component = {Users} />
                        <Route path="/contact" component={Contact}/>
                        <Route component={ Notfound } />
                    </Switch>
                </div>
            </Router>
             )
        }
    }

    let obj = {
    silly: 'billy'
    }

    let fun = () => {
    console.log('oh what fun')
    }

    ReactDOM.render(<Rounting />, document.getElementById('root'));

    // ReactDOM.render(<Parent />, document.getElementById('root'));
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