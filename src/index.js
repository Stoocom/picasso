import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './components/App.js';
import store from './slices/index.js';

const mountNode = document.getElementById('root');
const root = ReactDOM.createRoot(mountNode);
//ReactDOM.render(<App />, document.getElementById("root"));

root.render(
    <Provider store={store}>
      <App />
    </Provider>,
);