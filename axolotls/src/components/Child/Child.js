import React from 'react';
import Grandchild from "../Grandchild/Grandchild";
import './Child.css'

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
                <Grandchild word={this.props.word} /> <span className="child-prop">I'm giving parent's props to Grandchild</span>
            </div>
        )
    }
}

export default Child
