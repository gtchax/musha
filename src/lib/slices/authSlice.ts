import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

const authSlice = createSlice({
    name: 'auth',
    initialState: { isLoggedIn: false },
    reducers: {
        setCredentials: (state, action) => {
            state.isLoggedIn = action.payload
        },
        logOut: (state) => {
            state.isLoggedIn = false
        },
    }
})

export const { setCredentials,logOut } = authSlice.actions

export default authSlice.reducer

export const selectIsAuth = (state: RootState) => state.auth.isLoggedIn