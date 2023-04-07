import React from "react";

const Sell = () => {
  return (
  <div>
    <div className="container">
    <div className="row">
        <div className="col-md-6 offset-md-3">
            <div className="signup-form">
                <form onSubmit={""} className="mt-5 border p-4 bg-light shadow">
                    <h4 className="mb-5 text-secondary">Property Detail</h4>
                    <div className="row">
                        <div className="mb-3 col-md-12">
                            <label>Property Name :<span className="text-danger">*</span></label>
                            <input type="text" name="name" className="form-control" placeholder="Enter Property Name" />
                        </div>
                        <div className="mb-3 col-md-12">
                            <label>Address :<span className="text-danger">*</span></label>
                            <input type="text" name="address" className="form-control" placeholder="Enter Building Number/Locality/Area" />
                        </div>
                        <div className="mb-3 col-md-12">
                            <label>City :<span className="text-danger">*</span></label>
                            <input type="text" name="location" className="form-control" placeholder="Enter City" />
                        </div>
                        <div className="mb-3 col-md-12">
                            <label>No. Of Rooms :<span className="text-danger">*</span></label>
                            <input type="text" name="rooms" className="form-control" placeholder="Enter Room Counts" />
                        </div>
                        <div className="mb-3 col-md-12">
                            <label>Price :<span className="text-danger">*</span></label>
                            <input type="number" name="price" className="form-control" placeholder="Enter Price" />
                        </div>
                        <div className="mb-3 col-md-12">
                            <label>Description :</label>
                            <input type="text" name="description" className="form-control" placeholder="Enter Description" />
                        </div>
                        <div className="mb-3 col-md-12">
                            <label>Upload Images : </label>
                            <br />
                            <input type="file" class="form-control-file" />
                        </div>
                        <div className="col-md-12">
                           <button className="btn btn-primary float-end">Post</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
  </div>
  );
};

export default Sell;

