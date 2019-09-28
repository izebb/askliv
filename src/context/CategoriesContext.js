import React from 'react'
import { SearchProvider } from './SearchContext'

const categoriesFromStore = localStorage.getItem('CATEGORIES')
export const CategoriesContext = React.createContext({
  setSelectedCategory: () => {}
})

export const CategoriesProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = React.useState(localStorage.getItem('CATEGORIES') || '')

  const handleSelectCategory = item => {
    setSelectedCategory(item)
    localStorage.setItem('CATEGORIES', item)
  }

  return (
    <CategoriesContext.Provider
      value={{
        setSelectedCategory: handleSelectCategory,
        selectedCategory: selectedCategory
      }}>
      <SearchProvider>{children}</SearchProvider>
    </CategoriesContext.Provider>
  )
}
