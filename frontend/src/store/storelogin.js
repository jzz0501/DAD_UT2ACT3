import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
    isAutenticated: false,
    username: '',
    userRol: ''
}

const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        login: (state, action) => {
            const userData = action.payload
            state.isAutenticated = true
            state.username = userData.name
            state.userRol = userData.rol
        },
        logout: (state) => {
            state.isAutenticated = false
            state.username = ''
            state.userRol = ''
        }
    }
})

export const loginActions = authSlice.actions
export default authSlice.reducer
