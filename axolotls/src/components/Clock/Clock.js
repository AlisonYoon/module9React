import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            date: new Date()
        }
    }

    //initial render
    componentDidMount(){
        console.log('hi')
        this.timerId = setInterval(
            ()=> this.tick(),
            1000
        )
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    render(){
        return (
            <div>
                hello this is a clock
                <h1>it is: {this.state.date.toLocaleTimeString()}</h1>
            </div>
        )
    }
}

ReactDOM.render(<Clock />, document.getElementById('root'));