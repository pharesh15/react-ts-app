import { createSlice } from '@reduxjs/toolkit';
import { IRegisterUser } from '../../types/User';

export interface UserState {
    users: IRegisterUser[],
    loading: boolean,
    success: boolean,
}

const initialState : UserState = {
    users: [],
    loading: true,
    success: false,
};

const userSlice = createSlice({
    name: 'users',
    initialState: initialState,
    reducers: {
        addUser(state, action) {
            state.users = [...state.users, action.payload];
            state.loading = false;
            state.success = true;
        },

        updateUser(state, action) {
            // const findUser = state.users.find(user => user.email === action.payload);
            // if(findUser){
            //     state.users.map((user) => user.email === action.payload)
            // }
        },

        deleteUser(state, action) {
            const findUser = state.users.find(user => user.email === action.payload)
            if(findUser){
                state.users = state.users.filter(user => user.email !== action.payload);
                state.loading = false;
                state.success = true;
            }
        },
        deleteAllUsers(state, action) { }
    },
});

export default userSlice.reducer;
export const {addUser, updateUser, deleteUser, deleteAllUsers} = userSlice.actions;