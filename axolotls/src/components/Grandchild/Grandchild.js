import React from 'react';

class Grandchild extends React.Component {
    render() {
        return (
            <div>
                <p>I am a grandchild with <b>{this.props.word}</b></p>
            </div>
        )
    }
}

export default Grandchild