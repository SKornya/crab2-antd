import { TableOutlined, TagOutlined } from '@ant-design/icons';
import { Table } from 'antd';
import { FunctionComponent } from 'react';

import styles from '../App.module.less';

const Main: FunctionComponent = () => {

  const dataSource = [
    {
      key: 1,
      name: <TagOutlined />,
      value: 2,
    },
    {
      key: 2,
      name: <TableOutlined />,
      value: 43,
    }
  ];

  const columns = [
    {
      title: 'name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'value',
      dataIndex: 'value',
      key: 'value',
    }
  ];

  return (
    <Table className={styles.table} dataSource={dataSource} columns={columns} />
  );
};

export default Main;
