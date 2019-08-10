import React from 'react'

const SearchBar = () => {
  //when importing from materialize you will have to adjust certain things
  //2. added forward slash '/' on the input... check errors in console.log and it will show you the needed changes. In this case we change 'class' to 'className' and 'for' to 'htmlFor'
  return (
    
      <nav style={{marginBottom: '30px'}}className="blue">
    <div className="nav-wrapper">
      <form>
        <div className="input-field">
          <input id="search" type="search" required />
          <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
          <i className="material-icons">close</i>
        </div>
      </form>
    </div>
  </nav>
    
  )
}

export default SearchBar
