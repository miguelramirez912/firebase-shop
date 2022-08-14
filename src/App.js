import { createContext, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import './App.css';
import Header from './components/Header';
import {app} from './firebase'
import Home from './routes/Home';
import LogIn from './routes/LogIn';
import Register from './routes/Register';

export const AppContext = createContext(null);

function App() {
  const [route, setRoute] = useState('home');
  const [user, setUser] = useState(null);
  return (
    <AppContext.Provider value={{route, setRoute, user, setUser}}>
      <Header />
      <Toaster/>
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
