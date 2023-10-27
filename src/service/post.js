import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const postsApi = createApi({
  reducerPath: 'postsApi',
  tagTypes: ["postsDetails", "postOneDetail"],
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/'}),
  endpoints: (builder) => ({
    getAllPosts: builder.query({
      query: (args) => {
        return ({
          url: '/posts',
          params: {
              _page: args.page,
              _limit: args.limit
          },
        })
      },
      providesTags: ["postsDetails"]
    }),
    getPostById: builder.query({
      query: (args) => {
        return ({
          url: `/posts/${args.id}`
        })
      },
      providesTags: ["postOneDetail"]
    }),
  }),
})

export const { useGetAllPostsQuery, useGetPostByIdQuery } = postsApi;