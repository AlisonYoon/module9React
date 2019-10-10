import React from 'react';
import Grandchild from "../Grandchild/Grandchild";

class Child extends React.Component {

    handleClick = () => {
        console.log(this)
    }

    render() {
        return (
            <div onClick={this.handleClick}>
                <p>{this.props.word} : I'm using props from Parent</p>
                I am a child with a {this.props.animal}
                <img src={this.props.image} alt={this.props.animal} />
                <Grandchild word={this.props.word} /> <span>I'm giving props to Grandchild</span>
            </div>
        )
    }
}

export default Child
