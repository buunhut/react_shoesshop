import React, { Component, useEffect } from "react";
import ProductItem from "./ProductItem";
import data from "./../data.json";
import Modal from "./Modal";
export default class ProductList extends Component {
  shoesArr = data;

  state = {
    sanpham: {},
  };
  addToCarts = (item) => {
    this.setState({
      sanpham: item,
    });
    document.querySelector("#myModal").classList.add("transform0");
    document.querySelector(".myOverlay").classList.remove("none");
    document.querySelector("body").classList.add("khoaScroll");
  };
  handleDong = () => {
    document.querySelector("#myModal").classList.remove("transform0");
    document.querySelector(".myOverlay").classList.add("none");
    document.querySelector("body").classList.remove("khoaScroll");
  };
  render() {
    return (
      <div className="container">
        <div onClick={this.handleDong} className="myOverlay none"></div>
        <h1>SHOES SHOP</h1>
        <Modal item={this.state.sanpham} dong={this.handleDong} />

        <div className="productItems">
          {this.shoesArr.map((item, index) => {
            return (
              <div key={index}>
                <ProductItem item={item} handleAdd={this.addToCarts} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
