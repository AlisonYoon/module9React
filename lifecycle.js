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

