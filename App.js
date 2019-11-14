
import React from 'react';

import Routes from './src/config/Routes';

import { Provider } from 'react-redux'
import configureStore from './src/config/store';
const App = () => {
  return (
    <Provider store={configureStore()}>
       <Routes/>
    </Provider>

  );
};

export default App