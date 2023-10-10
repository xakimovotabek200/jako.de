import React from 'react';
import './App.css';
import Home from './pages/Home/Home'
// core styles are required for all packages
import '@mantine/core/styles.css';

// other css files are required only if
// you are using components from the corresponding package
// import '@mantine/dates/styles.css';
// import '@mantine/dropzone/styles.css';
// import '@mantine/code-highlight/styles.css';
// ...

function App() {
  return (
    <div className="App">
     <Home/>
    </div>
  );
}

export default App;
