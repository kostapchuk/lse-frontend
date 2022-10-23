import { Navigate, Outlet, useLocation } from "react-router-dom";
import {useAuth} from "../../redux/hooks/use-auth";

const RequireTeacherAuth = () => {
    const {isAuth, isRoleTeacher} = useAuth();
    const location = useLocation();
    return isAuth && isRoleTeacher
        ? <Outlet />
        : <Navigate to={'/login'} state={{ from: location }} replace />
}

export default RequireTeacherAuth;
