import React from 'react'
import { SearchProvider } from './SearchContext'
import { CategoriesProvider } from './CategoriesContext'

export const AppContext = React.createContext({})

export const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value={{}}>
      <SearchProvider>
        <CategoriesProvider>{children}</CategoriesProvider>
      </SearchProvider>
    </AppContext.Provider>
  )
}
