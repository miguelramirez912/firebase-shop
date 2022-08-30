import React from 'react';
import { useContext } from 'react';
import { SiFirebase } from 'react-icons/si'
import { AppContext } from '../App';
import { getAuth, signOut } from "firebase/auth";
import toast from 'react-hot-toast';

const auth = getAuth();


const Header = () => {
    
    const {route, setRoute, user, setUser} = useContext(AppContext);
    const hazLogout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            toast('Sesión cerrada');
            setRoute('login');
            setUser(null);
          }).catch((error) => {
            // An error happened.
            console.error(error);
          });
    }
    return (
        <div className='fixed top-0 w-full'>
            <header className='h-20 w-full bg-gray-100 shadow-lg flex items-center justify-between px-8'>
                <div className='flex items-center gap-2 cursor-pointer' onClick={() => setRoute('home')}>
                    <SiFirebase className='text-2xl text-pink-600'/>
                    <span className='text-xl text-pink-600 semibold'>Firebase Sho V2p</span>
                </div>
                <div className='flex gap-2'>
                    {user 
                        ? <button className='bg-sky-500 text-white py-1 px-3 rounded-full hover:bg-sky-700 transition' onClick={hazLogout}>Log Out</button>
                        :<><button className='bg-sky-500 text-white py-1 px-3 rounded-full hover:bg-sky-700 transition' onClick={() => setRoute('login')}>Log In</button>
                        <button className='bg-sky-500 text-white py-1 px-3 rounded-full hover:bg-sky-700 transition' onClick={() => setRoute('register')}>Registrate</button></>
                    }
                </div>
            </header>
        </div>
    )
}

export default Header;