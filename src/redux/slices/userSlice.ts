import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export enum UserType {
    STUDENT = "STUDENT",
    TEACHER = "TEACHER",
}

export enum UserRole {
    ROLE_STUDENT = "ROLE_STUDENT",
    ROLE_TEACHER = "ROLE_TEACHER",
}

interface UserState {
    role: UserRole | null,
    type: UserType | null,
    accessToken: string,
    refreshToken: string,
    id: string,
}

const initialState: UserState = {
    role: null,
    type: null,
    accessToken: '',
    refreshToken: '',
    id: '',
};

interface LoginResponse {
    userRole: UserRole,
    userType: UserType,
    id: string,
    refreshToken: { value: string, type: string },
    accessToken: { value: string, type: string },
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<LoginResponse>) {
            state.role = action.payload.userRole;
            state.type = action.payload.userType;
            state.accessToken = action.payload.accessToken.value;
            state.refreshToken = action.payload.refreshToken.value;
            state.id = action.payload.id;
            console.log("in set user")
        },
        removeUser(state) {
            state.type = null;
            state.role = null;
            state.accessToken = '';
            state.refreshToken = '';
            state.id = '';
        },
    },
})

export const {setUser, removeUser} = userSlice.actions;

export default userSlice.reducer;
