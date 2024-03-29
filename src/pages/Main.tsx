import { TableOutlined, TagOutlined } from '@ant-design/icons';
import { Button, Layout, Table } from 'antd';
import { FunctionComponent } from 'react';

import styles from '../App.module.less';
import { Content } from 'antd/es/layout/layout';
import { Link } from 'react-router-dom';

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
    },
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
    },
  ];

  return (
    <Layout>
      <Content style={{ margin: '50px' }}>
        <Link to={'/login'}>
          <Button type="primary" ghost size="large">
            To login page
          </Button>
        </Link>
        <Table
          bordered
          className={styles.table}
          dataSource={dataSource}
          columns={columns}
        />
      </Content>
    </Layout>
  );
};

export default Main;
