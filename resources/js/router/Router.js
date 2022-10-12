import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Example from "../components/Example";
import Test from "../components/Test";
import Todo from "../components/Todo";
import Rstopwatch from "../components/Rstopwatch";
import Countform from "../components/Countform";
import Rcountdown from "../components/Rcountdown";
import Pic from "../components/Pic";
import Piccat from "../components/Piccat";
import Rid from "../components/RID";

const Router= () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Example />} />
                 <Route path="/test" element={<Test />} />
                 <Route path="/todos" element={<Todo />} />
                 <Route path="/Rwatch" element={<Rstopwatch />} />
                 <Route path="/Cform" element={<Countform />} />
                 <Route path="/Rcount" element={<Rcountdown />} />
                 <Route path="/pic" element={<Pic />} />
                 <Route path="/pic2" element={<Piccat />} />
                 <Route path="/rid" element={<Rid />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;

if (document.getElementById("root")) {
    ReactDOM.render(<Router />, document.getElementById("root"));
}