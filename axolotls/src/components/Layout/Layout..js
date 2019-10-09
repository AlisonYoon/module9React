import React from 'react';
import Animal from '../Animal/Animal'
import Header from '../Header/Header';

class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.handleClickTwo = this.handleClickTwo.bind(this)

    }

    handleClick = () => {
        document.querySelector(".Header").style = "background: #CE7F13";
    }

    handleClickTwo() {
        document.querySelector("h2").style = "color: #CE7F13";
    }

    render() {
        //<!--having <div> here, is because with JSX, you need surrounding element-->
        return (
            <div>
                <Header/>
                <h2 onClick={this.handleClickTwo}>I like </h2>
                <div>
                    <button onClick={this.handleClick}>Click to change header color</button>
                </div>
                <Animal/>
            </div>
        )
    }
}

export default Layout