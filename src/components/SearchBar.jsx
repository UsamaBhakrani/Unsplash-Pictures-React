import { useState } from "react"
import './SearchBar.css'

const SearchBar = ({onSubmit}) => {

  const [term,setTerm] = useState('')

  const handleFormSubmit = (event) => { 
    event.preventDefault()
      onSubmit(term)
  }

  const handleOnChange = (event) => {
    setTerm(event.target.value)

  }

  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <label>Enter Search Term</label>
      <input placeholder="Search Term" value={term} onChange={handleOnChange}/>
      </form>
    </div>
  )
}

export default SearchBar