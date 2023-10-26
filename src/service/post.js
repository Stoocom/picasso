import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const postsApi = createApi({
  reducerPath: 'postsApi',
  tagTypes: ["postsDetails"],
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/'}),
  endpoints: (builder) => ({
    getAllPosts: builder.query({
      query: (limit = 5, page = 5) => {
        console.log('query');
        return ({
          url: '/posts',
          params: {
              _page: limit,
              _limit: page
          },
        })
      },
      providesTags: ["postsDetails"]
    }),
  }),
})

export const { useGetAllPostsQuery } = postsApi;