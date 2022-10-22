import { useAppSelector } from "../hooks/redux-hooks";

export function useAuth() {
    const { accessToken, id} = useAppSelector(state => state.auth);

    return {
        isAuth: !!accessToken,
        accessToken,
        id,
    };
}