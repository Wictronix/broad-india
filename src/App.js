import React from "react";
import AOS from "aos";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import AbsorptionChiller from "./pages/Products/AbsorptionChiller";
import Installations from "./pages/Services/Installations";
import PEChillers from "./pages/Products/PEChillers";
import Article from "./pages/Article";

export default function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Homepage />,
        },
        {
            path: "/about",
            element: <About />,
        },
        {
            path: "/contactUs",
            element: <ContactUs />,
        },
        {
            path: "/absorptionChiller",
            element: <AbsorptionChiller />,
        },
        {
            path: "/installations",
            element: <Installations />,
        },
        {
            path: "/peChillers",
            element: <PEChillers />,
        },
        {
            path: "/article",
            element: <Article />,
        },
    ]);

    React.useEffect(() => {
        AOS.init();
        window.addEventListener("load", AOS.refresh);
        window.scrollTo(0, 0);
    }, []);
    return <RouterProvider router={router} />;
}
