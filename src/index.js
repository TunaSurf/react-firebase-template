import React from 'react';
import ReactDOM from 'react-dom';

import { AuthUserProvider, FirebaseProvider } from './shared/firebase';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <FirebaseProvider>
      <AuthUserProvider>
        <App />
      </AuthUserProvider>
    </FirebaseProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
