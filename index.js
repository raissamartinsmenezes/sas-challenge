import React from 'react';
import { registerRootComponent } from 'expo';
import { Provider } from 'react-redux';

import App from './App';

import store from './src/store/storeConfig';

const AppWithStore = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(AppWithStore);
