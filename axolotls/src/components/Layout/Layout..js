import React from 'react';
import Animal from '../Animal/Animal'
import Header from '../Header/Header';

class Layout extends React.Component {
    render() {
        //<!--having <div> here, is because with JSX, you need surrounding element-->
        return (
            <div>
                <Header />
                <h2>I like </h2>
                <Animal />
            </div>
        )
    }
}

export default Layout