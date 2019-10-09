import React from 'react';
import Animal from '../Animal/Animal'

class Layout extends React.Component {
    render() {
        return (
            <div>
                <h1>I like </h1>
                <Animal />
            </div>
        )
    }
}

export default Layout