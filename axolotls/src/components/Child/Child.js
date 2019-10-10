import React from 'react';

class Child extends React.Component {

    handleClick = () => {
        console.log(this)
    }

    render() {
        return (
            <div onClick={this.handleClick}>
                I am a child with a {this.props.animal}
                <img src={this.props.image} alt={this.props.animal} />
            </div>
        )
    }
}

export default Child
