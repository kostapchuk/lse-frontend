import { Navigate, Route, Routes } from "react-router-dom";
import RequireTeacherAuth from "./require-teacher-auth";
import {protectedRoutes, publicRoutes, RouteNames, teacherRoutes} from "./index";
import RequireAuth from "./require-auth";

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
            <Route element={<RequireTeacherAuth />}>
                {(teacherRoutes).map((route) => (
                    <Route
                        path={route.path}
                        element={route.component}
                        key={route.path} />
                ))}
            </Route>
            <Route
                path="*"
                element={<Navigate to={RouteNames.NOT_FOUND} replace />}
            />
        </Routes>
    );
};

export default AppRouter;
