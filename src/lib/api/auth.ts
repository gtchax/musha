import { apiSlice } from "./api"

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: credentials => ({
                url: '/auth/sign-in',
                method: 'POST',
                body: { ...credentials }
            })
        }),
        signup: builder.mutation({
            query: credentials => ({
                url: '/auth/sign-in',
                method: 'POST',
                body: { ...credentials }
            })
        }),

    })
})

export const {
    useLoginMutation,
    useSignupMutation,
} = authApiSlice 