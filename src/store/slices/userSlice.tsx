import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'users',
    initialState: [],
    reducers: {
        addUser(state, action) { },
        updateUser(state, action) { },
        deleteUser(state, action) { },
        deleteAllUsers(state, action) { }
    },
});

console.log(userSlice.actions);

export default userSlice.reducer;