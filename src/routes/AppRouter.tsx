import { Navigate, Route, Routes } from "react-router-dom";
import RequireAuth from "../components/login/require-auth";
import { protectedRoutes, publicRoutes, RouteNames } from "./index";

const AppRouter = () => {
    return (
        <Routes>
            {
                (publicRoutes).map((route) => (
                    <Route
                        path={route.path}
                        element={route.component}
                        key={route.path} />
                ))
            }

            <Route element={<RequireAuth />}>
                {(protectedRoutes).map((route) => (
                    <Route
                        path={route.path}
                        element={route.component}
                        key={route.path} />
                ))}
            </Route>

            <Route
                path="*"
                element={<Navigate to={RouteNames.REGISTRATION} replace />}
            />
        </Routes>
    );
};

export default AppRouter;