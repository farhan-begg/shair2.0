// feature 1
import React from "react";
import data from "../../trilliant.json";
import Products from "../products/Product";
import Filter from "../filter/Filter";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      size: "",
      sort: "",
      bodytype: "",
      quality: "",
      year: ""
    };
  }
  // Sorts product based on target price
  sortProducts = (event) => {
    const sort = event.target.value;
    console.log(event.target.value);
    this.setState((state) => ({
      sort: sort,
      products: this.state.products
        .slice()
        //compares price a and price b
        .sort((a, b) =>
          sort === "lowest"
            ? a.price > b.price
              ? 1
              : -1
            : sort === "highest"
            ? a.price < b.price
              ? 1
              : -1
            : a._id < b._id
            ? 1
            : -1
        ),
    }));
  };
  filterProducts = (event) => {
    // filters products based on the target size
    console.log(event.target.value);
    if (event.target.value === "") {
      this.setState({ size: event.target.value, products: data.products });
    } else {
      this.setState({
        size: event.target.value,
        products: data.products.filter((product) => product.event.target.value),
      });
    }
  };

  filterBodytype = (event) => {
    // filters products based on average fit
    let averageFit = event.target.value;
    if (averageFit == "0") {
      this.setState(
        { bodytype: event.target.value, products: data.products },
        () => {
          console.log("All Products Show", this.state.products);
        }
      );
    } else {
      this.setState(
        {
          bodytype: event.target.value,
          products: data.products.filter(
            (product) => product.averageFit == averageFit
          ),
        },
        () => {
          console.log("PRODUCTS", this.state.products);
        }
      );
    }
  };

  filterModelYear = (event) => {
    // filters products based on average fit
    let modelYear = event.target.value;
    if (modelYear == "") {
      this.setState(
        { year: event.target.value, products: data.products },
        () => {
          console.log("All Products Show", this.state.products);
        }
      );
    } else {
      this.setState(
        {
         year: event.target.value,
          products: data.products.filter(
            (product) => product.Model_Year == modelYear
          ),
        },
        () => {
          console.log("PRODUCTS", this.state.products);
        }
      );
    }
  };


  // filterYear = (event) => {
  //   let averageQuality= event.target.value;

  //   console.log(event.target.value);

  //   if (averageQuality == 2014) {
  //     this.setState(
  //       {
  //         quality: event.target.value,
  //         products: data.products.filter(
  //           (product) => product.Model_Year == averageQuality
  //         ),
  //       },
  //       () => {
  //         console.log("Quality", this.state.products);
  //       }
  //     );
  //   } else if (averageQuality == "80") {
  //     this.setState(
  //       {
  //         quality: event.target.value,
  //         products: data.products.filter(
  //           (product) => product.averageQuality == averageQuality
  //         ),
  //       },
  //       () => {
  //         console.log("Quality 80", this.state.products);
  //       }
  //     );
  //   } else if (averageQuality == "60") {
  //     this.setState({
  //       quality: event.target.value,
  //       products: data.products.filter(
  //         (product) => product.averageQuality == averageQuality
  //       ),
  //     });
  //   } else {
  //     this.setState(
  //       {
  //         quality: event.target.value,
  //         products: data.products,
  //       },
  //       () => console.log("All", this.state.products)
  //     );
  //   }
  // };


  filterYear= (event) => {
    // Filters products based on quality
    let modelYear = event.target.value;

    console.log(event.target.value);

    if (modelYear == 2013) {
      this.setState({
        year: event.target.value,
        products: data.products.filter(
          (product) => product.Model_Year== modelYear
        ),
        },
        () => {
          console.log("Model Year", this.state.products);
        }
      );
    } else if (modelYear == 2014) {
      this.setState({
        year: event.target.value,
        products: data.products.filter(
          (product) => product.Model_Year== modelYear
        ),
      });
    
    } else if (modelYear == 2015) {
      this.setState({
        year: event.target.value,
        products: data.products.filter(
          (product) => product.Model_Year== modelYear
        ),
      });


    }
    else if (modelYear == 2016) {
      this.setState({
        year: event.target.value,
        products: data.products.filter(
          (product) => product.Model_Year== modelYear
        ),
      });
    
    } 
    else if (modelYear == 2017) {
      this.setState({
        year: event.target.value,
        products: data.products.filter(
          (product) => product.Model_Year== modelYear
        ),
      });
    
    } 
    else if (modelYear == 2018) {
      this.setState({
        year: event.target.value,
        products: data.products.filter(
          (product) => product.Model_Year== modelYear
        ),
      });
    
    } 
    else if (modelYear == 2019) {
      this.setState({
        year: event.target.value,
        products: data.products.filter(
          (product) => product.Model_Year== modelYear
        ),
      });
    
    } 
    else if (modelYear == 2020) {
      this.setState({
        year: event.target.value,
        products: data.products.filter(
          (product) => product.Model_Year== modelYear
        ),
      });
    
    } 
    else if (modelYear == 2021) {
      this.setState({
        year: event.target.value,
        products: data.products.filter(
          (product) => product.Model_Year== modelYear
        ),
      });
    
    } else if (modelYear == 2022) {
      this.setState({
        year: event.target.value,
        products: data.products.filter(
          (product) => product.Model_Year== modelYear
        ),
      });
    
    } 

     else {
      this.setState(
        {
          year: event.target.value,
          products: data.products,
        },
        () => console.log("All", this.state.products)
      );
    }
  };









  filterQuality = (event) => {
    // Filters products based on quality
    let averageQuality = event.target.value;

    console.log(event.target.value);

    if (averageQuality == "100") {
      this.setState(
        {
          quality: event.target.value,
          products: data.products.filter(
            (product) => product.averageQuality == averageQuality
          ),
        },
        () => {
          console.log("Quality", this.state.products);
        }
      );
    } else if (averageQuality == "80") {
      this.setState(
        {
          quality: event.target.value,
          products: data.products.filter(
            (product) => product.averageQuality == averageQuality
          ),
        },
        () => {
          console.log("Quality 80", this.state.products);
        }
      );
    } else if (averageQuality == "60") {
      this.setState({
        quality: event.target.value,
        products: data.products.filter(
          (product) => product.averageQuality == averageQuality
        ),
      });
    } else {
      this.setState(
        {
          quality: event.target.value,
          products: data.products,
        },
        () => console.log("All", this.state.products)
      );
    }
  };

  render() {
    //Renders filter component
    return (
      <div className="search-filter">
        <Filter
          count={this.state.products.length}
          size={this.state.size}
          sort={this.state.sort}
          bodytype={this.state.bodytype}
          filterBodytype={this.filterBodytype}
          filterQuality={this.filterQuality}
          filterProducts={this.filterProducts}
          sortProducts={this.sortProducts}
          filterYear={this.filterYear}
          filterModelYear ={this.filterModelYear}
        ></Filter>
        <Products products={this.state.products}></Products>
      </div>
    );
  }
}

export default App;
