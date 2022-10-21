import { useSelector } from "react-redux"
import { Navigate, Outlet, useLocation } from "react-router-dom";

const RequireAuth = () => {
    const token = useSelector((state: any) => state.auth.accessToken);
    const location = useLocation();
    return token
        ? <Outlet />
        : <Navigate to={'/login'} state={{ from: location }} replace />
}

export default RequireAuth;