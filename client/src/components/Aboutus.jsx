import { Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import howToUseApp from "./API/howToUse.js";

const Aboutus = () => {
  const [aboutData, setAboutData] = useState(howToUseApp);
  return (
    <>
      <section className="common-section our-services my-4">
        <div className="container mb-5">
          <div className="row">
            {/* 1section right side data  */}
            <Paper>
              <div className="col-12 col-lg-7 our-services-list">
                <Typography variant="h2">How to use the App?</Typography>

                {aboutData.map((curElem) => {
                  const { id, title, info } = curElem;
                  return (
                    <>
                      <div className="row our-services-info" key={id}>
                        <div className="col-1 our-services-number">{id}</div>
                        <div className="col-10 our-services-data">
                          <h2>{title}</h2>
                          <p className="main-hero-para">{info}</p>
                        </div>
                      </div>
                    </>
                  );
                })}

                <br />
              </div>
            </Paper>
          </div>
        </div>
      </section>
    </>
  );
};

export default Aboutus;
