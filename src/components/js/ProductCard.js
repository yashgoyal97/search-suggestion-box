import React, { Fragment } from 'react';
import '../css/ProductCard.css';

const ProductCard = (props) => {
  const products = props.products;
  const productCard = products.map((element) => (
    <div className="prod-card" key={element.productname.toString()}>
      <a href={element.producturl} target="_blank">
        <img
          className="product-image"
          src={element.productimage}
          alt="Sofa"
          itemProp="image"
        />
        <div>
          <div id="prodName">{element.productname}</div>
          <span className="new-price">Rs. {element.sellingprice}</span>
          <span className="old-price">Rs. {element.mrpprice}</span>
        </div>
      </a>
    </div>
  ));
  return <Fragment>{productCard}</Fragment>;
};

export default ProductCard;
