import React, { Component } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  withStyles,
} from "@material-ui/core";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";

const styles = () => ({
  root: {
    flexGrow: 1,
    colorPrimary: "yellow",
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  colorPrimary: {
    background: "linear-gradient(45deg, #FDC830 30%, #F37335 90%)",
  },
});

class AppHeader extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            />
            <Typography variant="h6" className={classes.grow}>
              Finding Falcone!
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

AppHeader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
  withStyles(styles),
  withRouter
)(AppHeader);
