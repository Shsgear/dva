import React from 'react';
import PropTypes from 'prop-types';
import { Table, Popconfirm, Button } from "antd";

const ProductList = ({ products, onDelete }) => {
  const columns = [{
    title: 'Name',
    dataIndex: 'Name',
  },
  {
    title: "Actions",
    render: (record) => {
      console.log(record);
      return (
        <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
          <Button>Delete</Button>
        </Popconfirm>
      );
    }
  }];
  return (
    <Table
      dataSource={products}
      columns={columns}
    />
  );
}

ProductList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
};

export default ProductList;
