import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Root from "./pages/Root";
import Home from "./pages/Home";
import OurStory from "./pages/OurStory";
import Gallery from "./pages/Gallery";
import GuestBook from "./pages/GuestBook";
import RSVP from "./pages/RSVP";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/our-story",
        element: <OurStory />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/guest-book",
        element: <GuestBook />,
      },
      {
        path: "/rsvp",
        element: <RSVP />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
