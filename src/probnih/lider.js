
import React from "react";
import Header from "./header"
import Imgi from "./section";
import Posledni from "./footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Razmetka1 from "./razmetka1";
import Razmetka11 from "./razmetka1-1";
import Razmetka12 from "./razmetka1-2";
import Razmetka13 from "./razmetka1-3";
import Maleshoes from "./maleshoes";
import Womanshoes from "./womanshoes";
import Register from "./register";
import Admin from "./admin"
import Sumki from "./sumki";


class Lider extends React.Component {
    render(){
        return(
            <div className="liddiv">
                
                
                <BrowserRouter>
                < Header />
            <Routes>
                <Route path="/" element={<Imgi />} />
                <Route path="/maleshoes" element={<Maleshoes />} />
                <Route path="/womanshoes" element={<Womanshoes />} />
                <Route path="/razmetka1" element={<Razmetka1 />} />
                    <Route path="/razmetka11" element={<Razmetka11 />} />
                        <Route path="/razmetka12" element={<Razmetka12 />} />
                            <Route path="/razmetka13" element={<Razmetka13 />} />
                                <Route path="/register" element={<Register />} />
                                    <Route path="/admin" element={<Admin />} />
                                        <Route path="/sumki" element={<Sumki />} />
            </Routes>
                <Posledni />
        </BrowserRouter>
                
                
                
            </div>
        )
    }
}


export default Lider
