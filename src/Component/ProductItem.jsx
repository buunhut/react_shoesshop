import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    let { item, handleAdd } = this.props;
    let { id, name, price, description, image } = item;
    return (
      <div className="item">
        <img src={image} alt="" />
        <div className="content">
          <h3>{name}</h3>
          <p>${price}</p>
        </div>
        <button
          onClick={() => {
            handleAdd(item);
          }}
        >
          Show Detail
        </button>
      </div>
    );
  }
}
