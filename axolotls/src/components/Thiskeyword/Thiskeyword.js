import React from 'react';

class OldBinding extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    //this syntax requires the bind line in the constructor to work
    handleClick() {
        console.log(this)
    }

    render() {

        return (
            <div>
                <button onClick={ this.handleClick }>
                    Click me to see 'this'
                </button>
            </div>
        )
    }
}

export default OldBinding


// New way

// class NewBinding extends React.Component {
//     constructor(props) {
//         super(props)
//     }
//
//     //new syntax DOESNT require the bind line in the constructor to work
//     handleClick = () => {
//         console.log(this)
//     }
//
//     render() {
//
//         return (
//             <div>
//                 <button onClick={ this.handleClick }>
//                     Click me to see 'this'
//                 </button>
//             </div>
//         )
//     }
// }
//
// export default NewBinding