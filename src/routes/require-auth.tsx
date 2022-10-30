import { Navigate, Outlet, useLocation } from "react-router-dom";
import {useAuth} from "../redux/hooks/use-auth";

const RequireAuth = () => {
    const {isAuth} = useAuth();
    const location = useLocation();
    return isAuth
        ? <Outlet />
        : <Navigate to={'/login'} state={{ from: location }} replace />
}

export default RequireAuth;
