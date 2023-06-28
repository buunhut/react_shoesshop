import React, { Component } from "react";

export default class Modal extends Component {
  render() {
    let {
      id,
      name,
      price,
      description: moTa,
      image: anh,
    } = this.props.item;
    return (
      <div id="myModal">
        <span onClick={this.props.dong}>X</span>
        <h2>Chi Tiết Sản Phẩm</h2>
        <img src={anh} alt="" />
        <h3>{name}</h3>
        <h4> Price: ${price}</h4>
        <p>{moTa}</p>
      </div>
    );
  }
}
