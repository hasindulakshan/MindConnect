import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LoginScreen from "../components/LoginScreen";
import { Home } from "../pages/home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: <LoginScreen />
            }
        ]

    }
]);

export default router;