// Data flow in React
// Think about champagne flute pyramid (it only goes down, not up)
// We already know that props are passed from parent to child
//          It's possible to combine the two
//          eg1 : <FormattedDate date={this.state.date} />    here, state is passed in as a prop
//          eg2 : class Thing extends ....... {
//                 constructor(props) {
//                     super(props)
//                     this.state={
//                     date = this.props.date               here, props is passed in state
//                     }
//                 }
//             }

//  you use props to set the data, you use state to use the data.
