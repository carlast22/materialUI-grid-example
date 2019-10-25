import React from "react";
import { Grid, makeStyles, Hidden } from "@material-ui/core";

const useStyles = makeStyles({
  header: {
    background: "#FE6B8B",
    color: "white",
    height: 100
  },
  navBar: {
    background: "#FE7B8B",
    color: "white",
    height: 100
  }
});

const SeasonDisplay = () => {
  const classes = useStyles();
  return (
    <div>
      <div id="header"></div>
      <div id="body">
        <Grid container spacing={4}>
          <Grid item md={12} xs={12} className={classes.header}>
            HEADER
          </Grid>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(value => (
            <Grid key={value} item md={1} xs={1}>
              {value}
            </Grid>
          ))}
          <Hidden mdDown>
            <Grid item lg={3}>
              <div id="navBar" className={classes.navBar}>
                face
              </div>
            </Grid>
          </Hidden>
          <Grid item lg={9} xs={12} md={12}>
            <div id="navBar" className={classes.navBar}>
              face
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default SeasonDisplay;
