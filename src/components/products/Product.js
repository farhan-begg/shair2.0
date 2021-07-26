import React, { Component } from "react";

import product from "../../trilliant.json";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import "./product.css";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import Rating from "@material-ui/lab/Rating";

function searchingFor(term) {
  //Returns lowercase string for search bar
  return function (x, y) {
    
    // let vehicleSearch = y.VehicleTypeName.toLowerCase().includes(term.toLowerCase()) 
    let modelName =  x.Model_Name.toLowerCase().includes(term.toLowerCase()) 
    return modelName

  };


    


}

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: product,
      term: "",
      year: ""
    };
    this.searchHandler = this.searchHandler.bind(this);
  }
  searchHandler(event) {
    //Sets the state with search input
    this.setState({ term: event.target.value });
  }

  render() {
    const { term, product } = this.state;
    return (
      //Renders list of products and search bar
      <div className="product-display">
        <Autocomplete
          className="searchTerm"
          freeSolo
          disableClearable
          options={this.props.products.map((product) =>  product.Model_Name)}
          // options={this.props.products.map((product) =>  product.VehicleTypeName)}

          renderInput={(params) => (
            <TextField
              {...params}
              margin="normal"
              onSelect={this.searchHandler}
              value={term}
              InputProps={{
                ...params.InputProps,
                type: "search",
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon fontSize="small" />
                  </InputAdornment>
                ),
              }}
              placeholder="Search Car"
            />
          )}
        />
        <div className="products">
          {this.props.products.filter(searchingFor(term)).map((product) => (
            <div className="product" key={product.Model_Name}>
              <a href=''>
                <img src='https://wallpapercave.com/wp/p2u5IWb.jpg' alt={product.Model_Name}></img>
              </a>
              <div className="product-name">{product.Make_Name}</div>
              <div className="product-store">{product.Model_Name}</div>
              {/* <div className="product-price">
                {formatCurrency(product.Model_Name)}
              </div> */}
              <Rating name="read-only" defaultValue={4} readOnly />
              <div className="product-fitter">
                <div className="product-fit">
                  Moedel Name {product.Model_Name}
                </div>
                <div className="product-overall">
                  Vehicle Type {product.VehicleTypeName}
                </div>
                <div className="product-quality">
                  Car Year {product.Model_Year}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
