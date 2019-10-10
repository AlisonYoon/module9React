// Lifecycle
// Exactly what it sounds like, the timeline from the creation to the destruction of a component
// There are lifecycle methods that are automatically triggered along this timeline
// that you can hook into(eg: just like any event listener in regular JS)
// Component is rendered to the DOM first time, it's called "Mounting"
//          -> componentDidMount()
// Component is removed from the DOM is called "Unmounting"
//          -> componentWillUnmount()
// When a parent re-renders and passes new props to a child
//          -> componentDidUpdate()    -> use this method in the children so that when a parent updates,
//                                          children gets re-rendered as well with new props
//              the first parameter of componentDidUpdate() gives you the access of the last state of the very previous render


class ChildWithLifecycle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loggedIn: this.props.loggedIn
        }
    }

    //lifecycle method that triggers when parent re-renders and passes new props to child
    //triggers on every re-render
    componentDidUpdate(prevProps) {
        //remember to use an if statement to stop a never ending loop
        if (this.props.loggedIn !== prevProps.loggedIn) {
            this.setState(
                {
                    loggedIn: this.props.loggedIn
                    //even if it keep assigns false(same false again and again), setState() will make it re-render
                })
        }
    }

    //this is just calling the method defined in the parent
    doThing = () => {
        this.props.clicker()
    }

    render() {
        return (
            <div>
                <h1>{ this.state.loggedIn ? 'Logged In' : 'Logged Out' }</h1>
                <button onClick={ this.doThing }>Log me out!</button>
            </div>
        )
    }
}

class ChildWithoutLifecycle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loggedIn: this.props.loggedIn
        }
    }

    //copy the componentDidUpdate func to show with lifecycle

    render() {
        return (
            <div>
                <h1>{ this.state.loggedIn ? 'Logged In' : 'Logged Out' }</h1>
            </div>
        )
    }
}

class LoginDecider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loggedIn: true
        }
    }

    //the function to be passed as a prop to children
    handleClick = () => {
        console.log('logging out')
        this.setState({
            loggedIn: false
        })
    }

    render() {
        return (
            <div>
                <ChildWithLifecycle loggedIn={ this.state.loggedIn } clicker={ this.handleClick }></ChildWithLifecycle>
                <ChildWithoutLifecycle loggedIn={ this.state.loggedIn }></ChildWithoutLifecycle>
            </div>
        )
    }
}

ReactDOM.render(<LoginDecider />, document.getElementById('root'))