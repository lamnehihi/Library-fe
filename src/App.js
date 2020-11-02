import logo from './logo.svg';
import './App.css';
import NavBar from 'components/NavBar';
import { Suspense } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Books from 'features/Books';

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <NavBar />

          <Switch>
            <Redirect exact from="/" to="/books"></Redirect>

            <Route path="/books" component={Books}></Route>
            {/* <Route path="/sign-in" component={Signin}></Route>

            <Route component={NotFound}></Route> */}
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
