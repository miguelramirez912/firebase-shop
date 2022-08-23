import React from "react";
import { requestPermission } from "../firebase";

const Home = () => {
    return(
        <div className='home'>
            Bienvenido al Firebase Shop
            <span>Activar Notificaciones Push</span>
            <button onClick={requestPermission}>Activar</button>
        </div>
    )
}

export default Home;