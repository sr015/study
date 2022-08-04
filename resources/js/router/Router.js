import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Example from "../components/Example";
import Test from "../components/Test";

const Router= () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Example />} />
                 <Route path="/test" element={<Test />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;

if (document.getElementById("root")) {
    ReactDOM.render(<Router />, document.getElementById("root"));
}