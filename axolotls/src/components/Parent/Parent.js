import React from 'react';
import Child from "../Child/Child";

class Parent extends React.Component {
    render() {
        return (
            <div>
                <h1>This is text from the parent</h1>
                <Child word="oh la la" image="https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg" animal="axolotls" />
                <Child word="beauty" image="https://timesofindia.indiatimes.com/thumb/msid-67586673,width-800,height-600,resizemode-4/67586673.jpg" animal="dragon" />
                <Child word="and the beast" image="https://i.pinimg.com/originals/5a/5d/52/5a5d52431ea19c03e5f4c0f3943ba52c.jpg" animal="puppy" />
            </div>
        )
    }
}

export default Parent