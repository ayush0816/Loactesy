import React from "react";
import BuildingCard from "./BuildingCard";
import { Container, Grid } from "@mui/material";
const BuildingList = () => {
  return (
    <>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={4}>
            <BuildingCard />
          </Grid>
          <Grid item xs={4}>
            <BuildingCard />
          </Grid>
          <Grid item xs={4}>
            <BuildingCard />
          </Grid>
          <Grid item xs={4}>
            <BuildingCard />
          </Grid>
          <Grid item xs={4}>
            <BuildingCard />
          </Grid>
          <Grid item xs={4}>
            <BuildingCard />
          </Grid>
          <Grid item xs={4}>
            <BuildingCard />
          </Grid>
          <Grid item xs={4}>
            <BuildingCard />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default BuildingList;
