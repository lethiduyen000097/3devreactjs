// import React from "react";
// import TableDemo from "./TableDemo";
  
// function App() {
//     return (
//         <div>
//             {/* Header with inline css */}
//             <h1
//                 style={{
//                     display: 'flex', justifyContent: 'center', padding: '15px',
//                     border: '13px solid #b4f0b4', color: 'rgb(11, 167, 11)'
//                 }}>
//                 Geeks For Geeks Material UI Table
//             </h1>
//             {/* Table component below header */}
//             <TableDemo />
//         </div>
//     )
// }
  
// export default App;



import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Customers from "./component/customers.component";
// import CreateUser from "./component/users.component";
// import HomeBay from "./component/home.component";
// import MenuHome from "./component/menuHome.component";
// import NavTabs from "./component/navTb.component";



export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            {/* <li>
              <Link to="/home">Home</Link>
            </li> */}
            <li>
              <Link to="/customers">Customer</Link>
            </li>
            {/* <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/test">Test</Link>
            </li> */}
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/customers">
            <Customers />
          </Route>
          {/* <Route path="/users">
            <CreateUser />
          </Route>
          <Route path="/test">
            {/* <MenuHome /> */}
            {/* <NavTabs />
          </Route> */}
          {/* <Route path="/">
            <HomeBay />
          </Route> */} */}
          
        </Switch>
      </div>
    </Router>
  );
}

