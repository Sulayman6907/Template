import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Store';
import Home from './Pages/Home';
import Counter from './Pages/Counter';
import Test from './Pages/Test';

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </Provider>
  );
}

export default App;
