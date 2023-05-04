
import { CircularProgress, Grid } from "@mui/material";
import React from "react";

const CheckingAuth = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh", backgroundColor: "primary.main", padding: 4 }}
      className="firstContainer"
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
      >
        <CircularProgress color="info"/>
      </Grid>
    </Grid>
  );
};

export default CheckingAuth;