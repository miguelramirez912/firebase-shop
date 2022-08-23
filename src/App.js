import React, { createContext, useEffect, useState } from 'react';
import {app, messaging} from './firebase';
import './App.css';
import Header from './components/Header';
import Home from './routes/Home';
import Footer from './components/Footer';
import LogIn from './routes/LogIn';
import Register from './routes/Register';
import Shopping from './routes/Shopping';
import { Toaster, toast } from 'react-hot-toast';
import { onMessage } from 'firebase/messaging';


export const AppContext = createContext(null);

onMessage(messaging, payload =>{
  console.log('Mensaje recibido');
  toast.custom((t) => (
    <div className='bg-sky-300 p-4 rounded-lg shadow-lg'>
      <h3 className='text-lg text-sky-700 font-semibold'>{payload.notification.title}</h3>
      <p className='text-sm text-sky-600'>{payload.notification.body}</p>
    </div>
  ))
});

function App() {
  const [route, setRoute] = useState('home');
  const [user, setUser] = useState(null);
  
  return (
    <AppContext.Provider value={{route, setRoute, user, setUser}}>
      <div className='h-screen'>
        <Toaster/>
        <Header />
        <main className='p-6 mt-12 '>
          {route === 'home' && <Home />}
          {route === 'login' && <LogIn />}
          {route === 'register' && <Register />}
          {route === 'shopping' && <Shopping />}
          {user && <p>Usuario logeado: {user.email}</p>}
        </main>
        <Footer />
      </div>
    </AppContext.Provider>
  );
}

export default App;
