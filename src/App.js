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
import IndividualBlog from "./pages/IndividualBlog";
import VapAbsorptionChiller from "./pages/Products/VapAbsorptionChiller";
import CCHPSystem from "./pages/Products/CCHPSystem";
import BroadGroup from "./pages/BroadGroup";
import Pump from "./pages/Products/Pump";
import BlogsArticles from "./pages/BlogsArticles";
import NotFound from "./pages/NotFound";
import BlogsByCategory from "./pages/BlogsByCategory";
import AllBlogs from "./pages/AllBlogs";
import RecentVideos from "./pages/RecentVideos";

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
      path: "/blogs-and-articles/tag/:id",
      element: <BlogsByCategory />,
    },
    {
      path: "/article/all",
      element: <AllBlogs type={"article"} />,
    },
    {
      path: "/blog/all",
      element: <AllBlogs type={"blog"} />,
    },
    {
      path: "/article/:id",
      element: <IndividualBlog isVideo={false} />,
    },
    {
      path: "/blog/:id",
      element: <IndividualBlog isVideo={false} />,
    },
    {
      path: "/recent-videos",
      element: <RecentVideos />,
    },
    {
      path: "/recent-video/:id",
      element: <IndividualBlog isVideo={true} />,
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
