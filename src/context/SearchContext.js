import React from 'react'

const searchData = localStorage.getItem('SEARCH_DATA');

export const SearchContext = React.createContext({
  selectedOption: {},
  selectedDates: {},
  onSearch: () => {},
})

export const SearchProvider = ({ children }) => {
  const [selectedOption, setSelectedOptions] = React.useState()
  const [selectedDates, setDate] = React.useState()

  const handleFormData = (selectedOption, selectedDates) => {

    setSelectedOptions(selectedOption)
    setDate(selectedDates);

    localStorage.setItem('SEARCH_DATA', JSON.stringify({selectedOption, selectedDates}) )
  }

  return (
    <SearchContext.Provider
      value={{
        onSearch: handleFormData,
        selectedDates,
        selectedOption,
        ...(searchData ? JSON.parse(searchData) : {})
      }}>
      {children}
    </SearchContext.Provider>
  )
}
