import './App.css';
import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import configureStore from './redux/store/index';

import Container from './components/component/Container';
function App() {
  const store = configureStore()
  return (
    <Provider store={store}>
      <Fragment>
        <Container />
        {/* <Extra/> */}
      </Fragment>
    </Provider>
  );
}

export default App;
