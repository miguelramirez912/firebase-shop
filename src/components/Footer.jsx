import React, { useContext } from "react";
import { AiFillHome } from "react-icons/ai";
import { BsFillCartFill, BsList } from "react-icons/bs";
import { AppContext } from "../App";

const Footer = () => {
    const { setRoute } = useContext(AppContext);
    return (
        <footer className='fixed h-16 w-full bg-sky-400 bottom-0 flex justify-evenly items-center'>
            <div className="bg-sky-200 p-2 text-3xl rounded-full text-pink-500 cursor-pointer hover:bg-sky-50 transition">
                <AiFillHome  onClick={() => setRoute('home')}/>
            </div>
            <div className="bg-sky-200 p-2 text-3xl rounded-full text-pink-500 cursor-pointer hover:bg-sky-50 transition">
                <BsFillCartFill onClick={() => setRoute('shopping')}/>
            </div>
            <div className="bg-sky-200 p-2 text-3xl rounded-full text-pink-500 cursor-pointer hover:bg-sky-50 transition">
                <BsList onClick={() => setRoute('tasklist')}/>
            </div>
        </footer>
    )
}

export default Footer;