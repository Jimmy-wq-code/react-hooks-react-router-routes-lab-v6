import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Actors from "./pages/Actors";
import Directors from "./pages/Directors";
import Movie from "./pages/Movie";
import ErrorPage from "./pages/ErrorPage";
import NavBar from "./components/NavBar"; // ✅ Manually add NavBar to each route

const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <NavBar />
        <Home />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/actors",
    element: (
      <>
        <NavBar />
        <Actors />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/directors",
    element: (
      <>
        <NavBar />
        <Directors />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/movie/:id",
    element: (
      <>
        <NavBar />
        <Movie />
      </>
    ),
    errorElement: <ErrorPage />,
  },
]);

export default routes;
