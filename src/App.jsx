import React from 'react';
import ReactDOM from 'react-dom/client';
import Portfolio from './components/Portfolio';

const App = () => {
  return (
    <div className="App">
      <Portfolio />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;