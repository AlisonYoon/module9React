// Routing
// Allows us to load different components based on URL
// $npm i react-router-dom
// import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

import App from "./axolotls/src/App";
import Users from "./axolotls/src/components/Users/Users";
import Contact from "./axolotls/src/components/Contact/Contact";

// class Rounting extends React.Component {
//     render() {
//         return (
//             <Router>
//                 <div>
//                     <ul>
//                         <li>
//                             <Link to="/">Home</Link>
//                         </li>
//                         <li>
//                             <Link to="/users">Users</Link>
//                         </li>
//                         <li>
//                             <Link to="/contact">Contact</Link>
//                         </li>
//                     </ul>
//                     <Route exact path="/" component={App}/>
//                     <Route path = "/users" component = {Users} />
//                     <Route path="/contact" component={Contact}/>
//                 </div>
//             </Router>
//         )
//     }
// }

