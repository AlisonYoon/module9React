import React from 'react';
import Child from "../Child/Child";

class Parent extends React.Component {
    constructor(props){
        //just need it
        super(props) //this gets all from React.Component. You do this so that [this] keyword acts in an expected manner

        this.state = {
            name : 'billy',
            age: 66
        }
    }

    handleClick = () => {
        this.setState({name: 'theresa', age: 99})
    }

    render() {
        return (
            <div>
                <h1>State Change</h1>
                <p onClick={this.handleClick}>This is the name: {this.state.name}</p>
                <p>This is the age: {this.state.age}</p>
                <h1>This is text from the parent</h1>
                <Child word="oh la la" image="https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg" animal="axolotls" />
                <Child word="beauty" image="https://timesofindia.indiatimes.com/thumb/msid-67586673,width-800,height-600,resizemode-4/67586673.jpg" animal="dragon" />
                <Child word="and the beast" image="https://i.pinimg.com/originals/5a/5d/52/5a5d52431ea19c03e5f4c0f3943ba52c.jpg" animal="puppy" />
            </div>
        )
    }
}

export default Parent