import {useAppSelector} from "./redux-hooks";
import {UserRole} from "../slices/state/authSlice";

export function useAuth() {
    const {accessToken, id, userRole, userType} = useAppSelector(state => state.auth);

    return {
        isAuth: !!accessToken,
        accessToken,
        id,
        userType,
        isRoleTeacher: UserRole.ROLE_TEACHER === userRole,
        isRoleStudent: UserRole.ROLE_STUDENT === userRole,
    };
}
