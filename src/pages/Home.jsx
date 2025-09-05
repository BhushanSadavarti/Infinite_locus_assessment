import React from "react";
import { Footer, MainSection, Navbar } from "../components";

export const Home = () =>{
    return (
        <div className="bg-black">
            <Navbar/>
            <MainSection/>
            <Footer/>
        </div>
    )
}