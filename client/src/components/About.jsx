import React from "react";
// import { Container, Paper } from "@mui/system";
import {
  Container,
  Paper,
  CssBaseline,
  Typography,
  Box,
  Grid,
  Stack,
} from "@mui/material";
import { Button } from "./Button";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(({ theme }) => ({
  paper1: {
    backgroundColor: "white",
    width: 600,
    height: 410,
    marginTop: 30,
  },
  paper2: {
    backgroundColor: "white",
    width: 400,
    height: 200,
    marginTop: 30,
    marginLeft: 20,
  },
  paper3: {
    backgroundColor: "white",
    width: 400,
    height: 200,
    marginTop: 10,
    marginLeft: 20,
  },
  aligned: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 70,
    margin: 0,
  },
}));

const About = () => {
  const classes = useStyles();
  return (
    <>
      <Container>
        <CssBaseline />
        <Grid container>
          <Grid item>
            <Paper className={classes.paper1} elevation={3}></Paper>
          </Grid>
          <Grid item>
            <Paper className={classes.paper2} elevation={3}>
              <Container maxWidth="sm">
                <Box className={classes.aligned}>
                  <Typography>See Your Rented Propety Here</Typography>
                </Box>
                <Box className={classes.aligned}>
                  <Button>aubeinvco</Button>
                </Box>
              </Container>
            </Paper>
            <Paper className={classes.paper3} elevation={3}>
              <Container maxWidth="sm">
                <Box className={classes.aligned}>
                  <Typography>See Your Rented Propety Here</Typography>
                </Box>
                <Box className={classes.aligned}>
                  <Button>aubeinvco</Button>
                </Box>
              </Container>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default About;
