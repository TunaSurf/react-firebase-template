import { BrowserRouter as Router } from 'react-router-dom';

import NormalizeStyles from './NormalizeStyles';
import Navigation from './Navigation';
import Routes from './Routes';

function App() {
  return (
    <Router>
      <NormalizeStyles />
      <Navigation />
      <Routes />
    </Router>
  );
}

export default App;
