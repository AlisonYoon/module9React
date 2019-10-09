import React from 'react';
import Greg from '../Greg/Greg';
import './Shiela.css';

class Shiela extends React.Component {
    render() {
        let handleClick = () => {
            document.querySelector('p').style.cssText = "color: #8F0ECE; font-size: 20px; font-weight: bold";
            document.querySelector('.event-div').innerHTML = "Clicked";
        };

        return (
            <div>
                <p>Hello, I'm Shiela, a component with class</p>
                <div className="event-div" onClick={handleClick}>Click me</div>
                <Greg />
            </div>
        )
    }
}

export default Shiela