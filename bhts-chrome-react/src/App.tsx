// function App() {
//   return (
//     <div className="App">
//       Hello World
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Install from './pages/install';
import Invest from './pages/invest';
import Save from './pages/save';
import Settings from './pages/settings';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Install />} />
        <Route path="/save" element={<Save />} />
        <Route path="/invest" element={<Invest />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;