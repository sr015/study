import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Example from "../components/Example";
import Test from "../components/Test";
import Post from "../components/Post";
import Rstopwatch from "../components/Rstopwatch";
import {Countform} from "../components/Countform";
import Rcountdown from "../components/Rcountdown";

const Router= () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Example />} />
                 <Route path="/test" element={<Test />} />
                 <Route path="/posts" element={<Post />} />
                 <Route path="/Rwatch" element={<Rstopwatch />} />
                 <Route path="/Cform" element={<Countform />} />
                 <Route path="/Rcount" element={<Rcountdown />} />
                 
            </Routes>
        </BrowserRouter>
    );
};

export default Router;

if (document.getElementById("root")) {
    ReactDOM.render(<Router />, document.getElementById("root"));
}