import React from 'react'
import ReactDOM from 'react-dom/client'
import {Home} from "./components/Home/Home.tsx";
import {History} from "./screens/history/History.tsx";
import {Layout} from "./components/Layout/Layout.tsx";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import {Dojo} from "./screens/dojo/Dojo.tsx";
import {Contact} from "./screens/contact/Contact.tsx";
import {Learn} from "./screens/learn/Learn.tsx";
import './index.css'


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <Home/>,
            }, {
                path: '/history',
                element: <History />,
            }, {
                path: '/dojo',
                element: <Dojo />,
            }, {
                path: '/contact',
                element: <Contact />,
            }, {
                path: '/learn',
                element: <Learn />,
            }
        ]
    },
], { basename: "/app"});

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
