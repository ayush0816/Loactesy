import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Sell = () => {
  const port = "http://localhost:8081";
  let navigate = useNavigate();
  const [creds, setcreds] = useState({
    name: "",
    address: "",
    location: "",
    rooms: "",
    price: "",
    description: "",
  });
  useEffect(() => {
    if (localStorage.getItem("token")) {
      console.log("hueueh");
    } else {
      navigate("/login");
    }
    // eslint-disable-next-line
  }, []);

  const handleChange = (e) => {
    setcreds({ ...creds, [e.target.name]: e.target.value });
    console.log(creds);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    console.log(token);
    const data = new FormData(e.currentTarget);
    try {
      const response = await fetch(`${port}/purchaseproperty/sell`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: data.get("name"),
          address: data.get("address"),
          location: data.get("location"),
          rooms: data.get("rooms"),
          price: data.get("price"),
          description: data.get("description"),
        }),
      });
      console.log(response.body);
      const json = await response.json();
      console.log(json);
      console.log("ayush");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="signup-form">
              <form
                onSubmit={handleSubmit}
                className="mt-5 border p-4 bg-light shadow"
              >
                <h4 className="mb-5 text-secondary">Property Detail</h4>
                <div className="row">
                  <div className="mb-3 col-md-12">
                    <label>
                      Property Name :<span className="text-danger">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Enter Property Name"
                      value={creds.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3 col-md-12">
                    <label>
                      Address :<span className="text-danger">*</span>
                    </label>
                    <input
                      id="address"
                      type="text"
                      name="address"
                      className="form-control"
                      placeholder="Enter Building Number/Locality/Area"
                      value={creds.address}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3 col-md-12">
                    <label>
                      City :<span className="text-danger">*</span>
                    </label>
                    <input
                      id="location"
                      type="text"
                      name="location"
                      className="form-control"
                      placeholder="Enter City"
                      value={creds.location}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3 col-md-12">
                    <label>
                      No. Of Rooms :<span className="text-danger">*</span>
                    </label>
                    <input
                      id="rooms"
                      type="number"
                      name="rooms"
                      className="form-control"
                      placeholder="Enter Room Counts"
                      value={creds.rooms}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3 col-md-12">
                    <label>
                      Price :<span className="text-danger">*</span>
                    </label>
                    <input
                      id="price"
                      type="number"
                      name="price"
                      className="form-control"
                      placeholder="Enter Price"
                      value={creds.price}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3 col-md-12">
                    <label>Description :</label>
                    <input
                      id="description"
                      type="text"
                      name="description"
                      className="form-control"
                      placeholder="Enter Description"
                      value={creds.description}
                      onChange={handleChange}
                    />
                  </div>
                  {/* <div className="mb-3 col-md-12">
                    <label>Upload Images : </label>
                    <br />
                    <input type="file" class="form-control-file" />
                  </div> */}
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
