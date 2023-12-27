import { apiSlice } from "./api"

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: credentials => ({
                url: '/users/login',
                method: 'POST',
                body: { ...credentials }
            })
        }),
        signup: builder.mutation({
            query: credentials => ({
                url: '/users/signup',
                method: 'POST',
                body: { ...credentials }
            })
        }),
        verifyLogin: builder.query({
            query: () => ({
                url: '/users/verifyToken',
            })
        }),

    })
})

export const {
    useLoginMutation,
    useSignupMutation,
    useVerifyLoginQuery,
} = authApiSlice 