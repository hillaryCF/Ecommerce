import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/home'
import Checkout from './pages/checkout'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path={"/"} component={Home} exact />
          <Route path={"/checkout"} component={Checkout} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
