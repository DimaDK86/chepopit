// features/api/catalogApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface CatalogItem {
  id: number
  name: string
  // добавьте другие поля согласно структуре вашего JSON
}

export const catalogApi = createApi({
  reducerPath: 'catalogApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://back-vz0p.onrender.com/api/structured-catalog/',
  }),
  tagTypes: ['Catalog'],
  endpoints: (builder) => ({
    getFirstCatalog: builder.query<CatalogItem[], void>({
      query: () => '4819/38',
      providesTags: ['Catalog'],
    }),
    getSecondCatalog: builder.query<CatalogItem[], void>({
      query: () => '3283/36',
      providesTags: ['Catalog'],
    }),
    // Альтернативный вариант - один endpoint с параметром
    getCatalogById: builder.query<CatalogItem[], { id: string; subId: string }>({
      query: ({ id, subId }) => `${id}/${subId}`,
      providesTags: ['Catalog'],
    }),
  }),
})

export const { 
  useGetFirstCatalogQuery, 
  useGetSecondCatalogQuery,
  useGetCatalogByIdQuery 
} = catalogApi