import React, { useEffect } from 'react';
import './App.scss';
import Footer from './components/Footer/index';
import Header from './components/Header/index';
import Home from './components/Home/index';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import News from './components/News/index';
import Analytycs from './components/Analytycs/index';
import Auth from './components/Auth/index';
import Register from './components/Register/index';
import Alert from './components/layout/Alert';
// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Alert />
        <Switch>
          <div className='width'>
            <Header />
            <Route exact path='/' component={Home} />
            <Route exact path='/news' component={News} />
            <Route exact path='/analytycs' component={Analytycs} />
            <Route exact path='/auth' component={Auth} />
            <Route exact path='/register' component={Register} />
          </div>
        </Switch>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
