import React from 'react';
import Animal from '../Animal/Animal'
import Header from '../Header/Header';

class Layout extends React.Component {
    render() {
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