import React from 'react';
import Layout from './containers/Layout/layout';
import Dashboard from './containers/Dashboard/Dashboard';
import { Provider } from 'react-redux';
import store from './store/store';

const App = () => {

  return (
    <Provider store={store}>
      <Layout>
        <Dashboard />
      </Layout>
    </Provider>
  );
}

export default App;
