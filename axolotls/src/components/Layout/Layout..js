import React from 'react';
import Animal from '../Animal/Animal'
import Header from '../Header/Header';

class Layout extends React.Component {
    constructor(props) {
        super(props)
    }

    handleClick = () => {
        document.querySelector(".Header").style = "background: #CE7F13";
    }

    render() {
        //<!--having <div> here, is because with JSX, you need surrounding element-->
        return (
            <div>
                <Header/>
                <h2>I like </h2>
                <div>
                    <button onClick={this.handleClick}>Click to change header color</button>
                </div>
                <Animal/>
            </div>
        )
    }
}

export default Layout