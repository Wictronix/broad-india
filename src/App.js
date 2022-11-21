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
import Seminar from "./pages/Services/Seminar";
import NonElectricChiller from "./pages/Products/NonElectricChiller";
import CCHPSystem from "./pages/Products/CCHPSystem";
import BroadGroup from "./pages/BroadGroup";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/about/",
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
      path: "/nonElectricChiller",
      element: <NonElectricChiller />,
    },
    {
      path: "/cchpSystem",
      element: <CCHPSystem />,
    },
    {
      path: "/article/:id",
      element: <Article />,
    },
    {
      path: "/seminar",
      element: <Seminar />,
    },
    {
      path: "/broadGroup",
      element: <BroadGroup />,
    },
  ]);

  React.useEffect(() => {
    AOS.init();
    window.addEventListener("load", AOS.refresh);
    window.scrollTo(0, 0);
  }, []);
  return <RouterProvider router={router} />;
}
