import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export enum UserType {
    STUDENT = "STUDENT",
    TEACHER = "TEACHER",
}

export enum UserRole {
    ROLE_STUDENT = "ROLE_STUDENT",
    ROLE_TEACHER = "ROLE_TEACHER",
}

export interface UserState {
    userRole: UserRole | null,
    userType: UserType | null,
    id: string | null,
    refreshToken: { value: string, type: string } | null,
    accessToken: { value: string, type: string } | null,
}

const initialState: UserState = {
    userRole: null,
    userType: null,
    accessToken: null,
    refreshToken: null,
    id: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials(state, {payload}) {
            const {id, accessToken, refreshToken, userRole, userType} = payload
            state.accessToken = accessToken;
            state.refreshToken = refreshToken;
            state.id = id;
            state.userRole = userRole;
            state.userType = userType;
        },
        logOut(state) {
            const {id, accessToken, refreshToken, userRole, userType} = initialState
            state.accessToken = accessToken;
            state.refreshToken = refreshToken;
            state.id = id;
            state.userRole = userRole;
            state.userType = userType;
        },
    },
})

export const {setCredentials, logOut} = authSlice.actions;

export default authSlice.reducer;
