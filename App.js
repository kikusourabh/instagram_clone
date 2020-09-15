import React from 'react';
import { Provider } from 'react-redux';
import { store, persistStor } from './src/store/StoreConfig';
import { PersistGate } from 'redux-persist/integration/react';
import RootRoute from './src/routes/RootRoute';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistStor}>
        <RootRoute />
      </PersistGate>
    </Provider>
  );
};
export default App;
