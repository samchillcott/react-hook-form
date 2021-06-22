import React from 'react';
import './App.css';
import useForm from 'react-hook-form';

function App() {
  return (
    <form action="">
      <input type="text" placeholder="Email" name="email" />
      <input type="password" placeholder="password" name="password" />
      <input type="submit" />
    </form>
  );
}

export default App;
