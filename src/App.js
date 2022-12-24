import React,{useState} from "react";
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Detail from "./pages/detail/Detail"
import "./app.scss"

    const Layout = () => {
        const [toogle, setToogle] = useState(false);
        return (
            <div className={toogle ? "active" : "app"}>
                <Navbar toogle={toogle} setToogle={setToogle} />
                <Outlet  toogle={toogle} setToogle={setToogle}/>
                <Footer toogle={toogle} setToogle={setToogle}/>
            </div>
        )
    }
    const router = createBrowserRouter([
        {
            path : "/",
            element : <Layout/>,
            children : [
                {
                    path :"/",
                    element : <Home/>
                },
                {
                    path : "/music/:mbid",
                    element : <Detail />,
                }
            ]
        }
    ])
const App = () => {
    return (
        <div>
            <RouterProvider router={router}/>
        </div>
    )
}

export default App;
