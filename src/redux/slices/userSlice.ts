import {createSlice} from '@reduxjs/toolkit';

export enum UserType {
    STUDENT="STUDENT",
    TEACHER="TEACHER",
}

export enum UserRole {
    ROLE_STUDENT="ROLE_STUDENT",
    ROLE_TEACHER="ROLE_TEACHER",
}

const initialState = {
    role: null,
    type: null,
    accessToken: null,
    refreshToken: null,
    id: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.role = action.payload.role;
            state.type = action.payload.type;
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
            state.id = action.payload.id;
        },
        removeUser(state) {
            state.type = null;
            state.role = null;
            state.accessToken = null;
            state.refreshToken = null;
            state.id = null;
        },
    },
})

export const {setUser, removeUser} = userSlice.actions;

export default userSlice.reducer;