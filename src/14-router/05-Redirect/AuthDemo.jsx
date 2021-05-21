import React from 'react'
import {
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

function PublicPage(props) {
  return <h3>Public</h3>;
}

function ProtectedPage() {
  return <h3>Protected</h3>;
}

function LoginPage() {
  // let location = useLocation()
  // console.log(location);
  let history = useHistory()
  console.log(history);
  //  双重解构的语法。
  let { state: { from } } = useLocation()
  let { replace } = useHistory()

  const login = () => {
    fakeAuth.authenticate(() => {
      // replace（） 里面填写location里面 state下面的from的值。 意思是跳转到这里。
      // fakeAuth.isAuthenticated 就会编程true
      replace(from)
    })
  }

  return (
    <div>
      <p>You must log in to view the page at {from}</p>
      <button onClick={login}>Log in</button>
    </div>
  );
}

function AuthButton() {
  let history = useHistory();

  return fakeAuth.isAuthenticated ? (
    <p>
      Welcome!{" "}
      <button
        onClick={() => {
          fakeAuth.signout(() => history.push("/"));
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  );
}

// ..rest会把所有的props拿过来
const PrivateRoute = ({children,...rest}) => {
  let {pathname} = useLocation()
  return (
    <Route
      {...rest}
    >
      {
        fakeAuth.isAuthenticated
          ? children
          // to后面可以是一个对象
          : <Redirect to={{pathname:'/login', state: { from: pathname }}}></Redirect>
      }
    </Route>
  )
}

export default function AuthExample() {

  return (
    <div>

      <ul>
        <li>
          <Link to="/public">Public Page</Link>
        </li>
        <li>
          <Link to="/protected">Protected Page</Link>
        </li>
      </ul>

      <Switch>
        <Route path="/public" >
          <PublicPage />
        </Route>
        <Route path="/login">
          <LoginPage></LoginPage>
        </Route>
        {/* 相比于 component， render， children， 这种包裹方法可以渲染两个组件 */}
        <PrivateRoute path="/protected">
          {/* AuthButton要放在这里， 以便及时更新 */}
          <AuthButton />
          <ProtectedPage></ProtectedPage>
        </PrivateRoute>
        <Redirect from="/" to="/public"></Redirect>
      </Switch>
    </div>
  );
}


// function add(x,...rest) {
//   console.log(rest)
// }

// add(1, 2, 3)