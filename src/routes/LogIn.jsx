import React, {useContext, useState} from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";
import toast from "react-hot-toast";
import { AppContext } from "../App";

const provider = new GoogleAuthProvider();
const auth = getAuth();


const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setUser } = useContext(AppContext);

    const hazLoginGoogle = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // ...
            console.log('Token ',token);
            console.log('User ',user);
            setUser(user);
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...//
        });    
    }
    const hazLoginConEmail = e => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // ...
            toast('Inicio de sesion valido');
            console.log(user);
            setUser(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }

    return(
        <div className='login'>
            <h1 className="text-xl font-semibold text-sky-700">Este es el LogIn</h1>
            <p className="text-sm">Haz click en el siguiente boton para logearte</p>
            <div className="flex flex-col">
                <form className="flex flex-col gap-2 max-w-sm" onSubmit={hazLoginConEmail}>
                    <input className="border border-gray-500 rounded py-1 px-2 outline-none" type="email" value={email} onChange={e => setEmail(e.target.value)} />
                    <input className="border border-gray-500 rounded py-1 px-2 outline-none" type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    <button className="bg-sky-400 py-1 text-white rounded shadow" type="submit">Log In</button>
                </form>
            </div>
            <button onClick={hazLoginGoogle}>Login con Google</button>
        </div>
    )
}

export default LogIn;