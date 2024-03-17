import { Button, Flex, Form, Input } from 'antd';
import { FunctionComponent } from 'react';

import styles from '../App.module.less';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

const Login: FunctionComponent = () => {
  interface FieldsTypes {
    username?: string;
    password?: string;
  }

  return (
    <Flex align="center" justify="center">
      <Form<FieldsTypes>
        name="normal_login"
        className={styles.form}
        initialValues={{
          remember: true,
        }}
        onFinish={(values: FieldsTypes) => {console.log(values)}}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
            className={styles.form__input}
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            className={styles.form__input}
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className={styles.login_button}
            ghost
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    </Flex>
  );
};

export default Login;
