// State
// Data storage location local to the current class you're in
// You can only use state in class components
// State is private and fully controlled by the component
// When state is updated, it triggers a render of the component in the DOM
// (it re-renders components whose state is changed. Just like Ajax but even faster because it uses virtual DOM)
// You will need a constructor to create state object
// To update the data stored in state
//      DON'T access object directly
//      use this.setState({data: 'newData'})  <- what's inside {here} is something you want to change

// componentDidMount() is the life-cycle method
// it's the function that is automatically called at the moment of first render(at the very beginning of component life cycle)



class Parent extends React.Component {
    constructor(props){
        //just need it
        super(props)

        this.state = {
            name: 'billy',
            age: 66
        }
    }

    handleClick = ()=>{
        this.setState({name: 'theresa'})
    }

    render(){
        return (
            <div>
                <p onClick={this.handleClick}>This is the name: {this.state.name}</p>
                <p>This is the age: {this.state.age}</p>
            </div>
        )
    }
}

export default Parent