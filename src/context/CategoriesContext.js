import React from 'react'
import { SearchProvider } from './SearchContext'

export const CategoriesContext = React.createContext({
    selectedCategory:{},
    setSelectedCategory: () => {}
})

export const CategoriesProvider = ({ children }) => {
    const [selectedCategory, setSelectedCategory] = React.useState({});

  return (
    <CategoriesContext.Provider value={{
        setSelectedCategory,
    }}>
      <SearchProvider>{children}</SearchProvider>
    </CategoriesContext.Provider>
  )
}
