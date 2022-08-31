import { createSlice } from '@reduxjs/toolkit';

export interface UserData {
    firstName: string;
    lastName: string;
    email: string;
    group: string;
    faculty: string;
}

export interface UserDataState {
    user: UserData
}

const initialState: UserDataState = {
    user: {
        firstName: '',
        lastName: '',
        email: '',
        group: '',
        faculty: '',
    }
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserInfo: (state, actions) => {
            state.user = { ...state.user, ...actions.payload }
        }
    },
});

export default userSlice.reducer;
export const { setUserInfo } = userSlice.actions;
