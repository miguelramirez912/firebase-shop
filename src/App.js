import React, { createContext, useState } from 'react';
import {app} from './firebase'
import './App.css';
import Header from './components/Header';
import Home from './routes/Home';
import LogIn from './routes/LogIn';
import Register from './routes/Register';
import { Toaster } from 'react-hot-toast';

export const AppContext = createContext(null);

function App() {
  const [route, setRoute] = useState('home');
  const [user, setUser] = useState(null);
  return (
    <AppContext.Provider value={{route, setRoute, user, setUser}}>
      <Toaster/>
      <Header />
      <main className='p-6'>
        {route === 'home' && <Home />}
        {route === 'login' && <LogIn />}
        {route === 'register' && <Register />}
        {user && <p>Usuario logeado: {user.email}</p>}
      </main>
    </AppContext.Provider>
  );
}

export default App;
