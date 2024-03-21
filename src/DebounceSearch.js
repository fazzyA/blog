import { debounce } from 'lodash'
import React, { useState } from 'react'

const DebounceSearch = () => {
    const [search, setsearch] = useState("")
    const [searchResult, setSearchResult] = useState("")
    console.log("🚀 ~ DebounceSearch ~ searchResult:", searchResult)
    const handleChange = (e) => {
        setsearch(e.target.value)
        debounceSearch(e.target.value)
    }
    const debounceSearch = debounce((value) => {
        //api 
        setSearchResult(value)

    }, 1000)

  return (
    <input
      type='text'
      value={search}
      onChange={handleChange}
      />
  )
}

export default DebounceSearch