import { connect } from 'dva';
import { Popconfirm, Table, Pagination } from 'antd';
import styles from './User.css';
import { routerRedux } from 'dva/router';
import { PAGE_SIZE } from '../constants';
import qs from 'querystring';

function User({ dispatch, list: dataSource, total, page: current, loading }) {
  function deleteHandler(id) {
    dispatch({
      type: 'user/remove',
      payload: id
    })
  }
  function onChange(page) {
    console.log(page);
    dispatch(routerRedux.replace({
      pathname: 'user',
      search: qs.stringify({ page })
    }))
  }
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a href="">{ text }</a>
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Website',
      dataIndex: 'website',
      key: 'website',
    },
    {
      title: 'Operation',
      key: 'operation',
      render: (text, { id }) => (
        <span className={styles.operation}>
          <a href="">Edit</a>
          <Popconfirm title="Confirm to delete?" onConfirm={deleteHandler.bind(null, id)}>
            <a href="">Delete</a>
          </Popconfirm>
        </span>
      ),
    },
  ];

  return (
    <div className={styles.normal}>
      <div>
        <Table
          loading={loading}
          columns={columns}
          dataSource={dataSource}
          rowKey={record => record.id}
          pagination={false}
        />
        <Pagination
          className="ant-table-pagination"
          total={total}
          current={current}
          onChange={onChange}
          pageSize={ PAGE_SIZE }
        />
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  const { list, total, page} = state.user;
  return {
    loading: state.loading.models.user,
    list,
    total,
    page,
  };
}

export default connect(mapStateToProps)(User);
