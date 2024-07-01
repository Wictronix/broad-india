import React from "react";
import AOS from "aos";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Careers from "./pages/Careers";
import ContactUs from "./pages/ContactUs";
import Chillers from "./pages/Products/Chillers";
import Installations from "./pages/Services/Installations";
import PEChillers from "./pages/Products/PEChillers";
import IndividualBlogArticle from "./pages/IndividualBlogArticle";
import VapAbsorptionChiller from "./pages/Products/VapAbsorptionChiller";
import CCHPSystem from "./pages/Products/CCHPSystem";
import BroadGroup from "./pages/BroadGroup";
import Pump from "./pages/Products/Pump";
import BlogsArticles from "./pages/BlogsArticles";
import NotFound from "./pages/NotFound";

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
      path: "/Chillers",
      element: <Chillers />,
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
      path: "/pump",
      element: <Pump />,
    },
    {
      path: "/VapAbsorptionChiller",
      element: <VapAbsorptionChiller />,
    },
    {
      path: "/cchpSystem",
      element: <CCHPSystem />,
    },
    {
      path: "/broadGroup",
      element: <BroadGroup />,
    },
    {
      path: "/blogs-and-articles",
      element: <BlogsArticles />,
    },
    {
      path: "/article/:id",
      element: <IndividualBlogArticle />,
    },
    {
      path: "/blog/:id",
      element: <IndividualBlogArticle />,
    },
    {
      path: "/careers",
      element: <Careers />,
    },
    {
      path: "*",
      element: <NotFound />
    }
  ]);

  React.useEffect(() => {
    AOS.init();
    window.addEventListener("load", AOS.refresh);
    window.scrollTo(0, 0);
  }, []);
  return <RouterProvider router={router} />;
}
