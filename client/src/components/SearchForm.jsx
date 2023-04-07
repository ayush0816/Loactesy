import React from 'react'

const SearchForm = () => {
  return (
    <div className="jumbotron jumbotron-fluid text-center text-light bg-event ">
  <h1 className="display-4">Property Finder</h1>
<div className="container">
 <form onSubmit={"/"} ><input name="utf8" type="hidden" value="✓"/>
<div className="row">
    <div className="col-12 py-2 col-md-4 offset-md-0 col-lg-2 offset-lg-3  px-md-0  ml-auto ">
      <input type="number" name="price" placeholder="Search by Price" className=" form-control border border-info"/>
        
    </div>
    <div className="col-12 py-2 col-md-4 col-lg-2 px-md-0 mx-0">
    <input type="text" name="location" placeholder="Search by Location" className=" form-control border border-info"/>

    </div>
    <div className="col-12 col-md-4 col-lg-3 py-2 px-md-0 mr-auto">
      <div className="input-group">
      <input type="text" placeholder="Search by Property Name" name="name" className="form-control border border-info"/>

      <div className="input-group-append">
        <input type="submit" name="commit" value="Search" className="btn btn-outline-light" data-disable-with="Save Search"/>
      </div>

    </div> 
    </div>
</div>
 

</form></div>
</div>
  )
}

export default SearchForm