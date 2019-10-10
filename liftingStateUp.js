// Lifting State Up
// You may find yourself needing the same piece of data in
// two different places of your component tree
// This is quite common, one solution is to lift state up to the nearest common parent
// and use props to pass them down from there
//  eg. if you need 'name' in two different places' two different components,
//      then find the level above that is common to both,
//      put the data into the state of the parent component
//      and pass it down via props.
//      It will end up in the original component's state, but the difference is that
//      the data comes from props rather than created there.

// This means when a re-render occurs at the top level common ancestor, then the data will
// permeate through props to the child components and re-render (with the help of lifecycle method)
