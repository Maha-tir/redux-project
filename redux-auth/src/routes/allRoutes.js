import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

const userRoutes = [{ path: "/user/home", component: Home }];
const authRoutes = [
  { path: "/auth/login", component: Login },
  { path: "/auth/register", component: Register },
];

export { userRoutes, authRoutes };
