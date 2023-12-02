import React, { Suspense } from "react";
import { Route, Routes, useRoutes } from "react-router-dom";
import MainLayout from "../layouts/mainLayout"; // Make sure the path is correct

const Router = () => {
    return useRoutes([
        {
            // path: "/",
            // element: <MainLayout />,
            // children: [
            //     {
            //         path: "/",
            //         element: <h1>Home</h1>
            //     },
               
            // ]
        }
    ])
};

export default Router;
