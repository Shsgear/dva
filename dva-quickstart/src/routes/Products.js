import React from "react";
import { connect } from "dva";
import ProductList from "../components/ProductList";

const Products = ({ dispatch, products }) => {
  function handleDelete(id) {
    dispatch({
      type: 'products/delete',
      payload: id
    })
  }
  return (
    <div>
      <h2>List of Products</h2>
      <ProductList onDelete={handleDelete} products={products} />
    </div>
  )

}
// 将products model 与组件 connect
export default connect(({products}) => ({
  products,
}))(Products);
