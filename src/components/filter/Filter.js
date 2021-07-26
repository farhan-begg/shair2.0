import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import "./filter.css";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Slider } from "@material-ui/core";

const styles = (theme) => ({
  button: {
    display: "block",
    marginTop: theme.spacing.unit * 10,
    padding: 10,
  },
  formControl: {
    margin: theme.spacing.unit * 6,
    minWidth: 140,
  },
});
//This component renders the select drop down method for filtering
class ControlledOpenSelect extends React.Component {
  state = {
    age: "",
    open: false,
  };

  handleChange = (event) => {
    this.setState({ [event.target.Model_Name]: event.target.value });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className="filter">
        <form autoComplete="off">

          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="demo-controlled-open-select">
              Model Type
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={this.props.bodytype}
              onChange={this.props.filterBodytype}
              label="Sizes"
            >
              <MenuItem value="0">All</MenuItem>
              <MenuItem value="60">Crossover SUV</MenuItem>
              <MenuItem value="80">Bike </MenuItem>
              <MenuItem value="40">Car</MenuItem>
              <MenuItem value="100">Truck</MenuItem>
            </Select>
          </FormControl>



          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="demo-controlled-open-select">
              Year
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={this.props.filterModelYear}
              onChange={this.props.filterYear}
              label="Sizes"
            >
              <MenuItem value="">All</MenuItem>
         
              <MenuItem value={2013}>2013</MenuItem>
              <MenuItem value={2015}>2015</MenuItem>
              <MenuItem value={2021}>2021</MenuItem>

            </Select>
          </FormControl>




          
        </form>
      </div>
    );
  }
}

ControlledOpenSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ControlledOpenSelect);
