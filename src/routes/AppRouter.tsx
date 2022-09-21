import {Navigate, Route, Routes} from "react-router-dom";
import { publicRoutes, RouteNames } from "./index";


const AppRouter = () => {
    return (
        <Routes>
            {
                (publicRoutes).map((route) => (
                    <Route
                    path={route.path}
                    element={route.component}
                    key={route.path}/>
                ))
            }
                <Route
                path="*"
                element={<Navigate to={RouteNames.STUDY} replace/>}
            />
        </Routes>
    );
};

export default AppRouter;