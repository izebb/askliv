import React from 'react'
import { SearchProvider } from './SearchContext'

export const Categories = React.createContext({})

export const CategoriesProvider = ({ children }) => {
  return (
    <Categories.Provider value={{}}>
      <SearchProvider>{children}</SearchProvider>
    </Categories.Provider>
  )
}
