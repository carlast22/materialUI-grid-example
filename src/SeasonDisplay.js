import React from "react";
import { Grid, makeStyles, Hidden, Paper } from "@material-ui/core";

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
        <Grid container item xs={12} spacing={3}>
          <Grid item xs={4} lg={7} lg-offset={5}>
            <Paper className={classes.paper}>item1</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>item2</Paper>
          </Grid>
        </Grid>
      </Grid>
        <Grid container spacing={4}>
          <Grid container item xs={12} spacing={3}>
            <Grid item xs={4}>
              <Paper className={classes.paper}>item3</Paper>
            </Grid>
          </Grid>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(value => (
            <Grid key={value} item md={1} xs={1}>
              {value}
            </Grid>
          ))}
          <Hidden mdDown>
            <Grid item lg={3}>
              <div id="navBar" className={classes.navBar}>
                NAV BAR
              </div>
            </Grid>
          </Hidden>
          <Grid item lg={9} xs={12} md={12}>
            <div id="navBar" className={classes.navBar}>
              FORM
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default SeasonDisplay;
