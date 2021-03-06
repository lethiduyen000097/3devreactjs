// import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

// import Customers from "./component/customers.component";
// // import CreateUser from "./component/users.component";
// // import HomeBay from "./component/home.component";
// // import MenuHome from "./component/menuHome.component";
// // import NavTabs from "./component/navTb.component";



// export default function App() {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             {/* <li>
//               <Link to="/home">Home</Link>
//             </li> */}
//             <li>
//               <Link to="/customers">Customer</Link>
//             </li>
//             {/* <li>
//               <Link to="/users">Users</Link>
//             </li>
//             <li>
//               <Link to="/test">Test</Link>
//             </li> */}
//           </ul>
//         </nav>

//         {/* A <Switch> looks through its children <Route>s and
//             renders the first one that matches the current URL. */}
//         <Switch>
//           <Route path="/customers">
//             <Customers />
//           </Route>
//           {/* <Route path="/users">
//             <CreateUser />
//           </Route>
//           <Route path="/test">
//             {/* <MenuHome /> */}
//             {/* <NavTabs />
//           </Route> */}
//           {/* <Route path="/">
//             <HomeBay />
//           </Route> */} */}
          
//         </Switch>
//       </div>
//     </Router>
//   );
// }



import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Customers from "./view/customers/createCustomer";
import EditCustomers from "./view/customers/editCustomer";
import Users from "./view/user/createUser";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
        <Link to="/customer">Customer</Link>
        <br />
        <Link to="/users">Users</Link>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/customer">
            <Customers />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path='/edit-customer' component={EditCustomers} />
        </Switch>
      </div>
    </Router>
  );
}

