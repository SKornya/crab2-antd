import {
  LockOutlined,
  MoonOutlined,
  SunOutlined,
  UserOutlined,
} from '@ant-design/icons';
import {
  Button,
  ConfigProvider,
  Flex,
  Form,
  Image,
  Input,
  Layout,
  Switch,
  theme,
} from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import { useEffect, useState } from 'react';

import logoLight from '../public/logo_light.svg';
import logoDark from '../public/logo_dark.svg';
import styles from './App.module.less';

interface FieldsTypes {
  username?: string;
  password?: string;
}

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(
    !!window.matchMedia('(prefers-color-scheme: dark)')
  );

  const { token } = theme.useToken();

  useEffect(() => {
    token.colorBgContainer = isDarkTheme ? '#242424' : '#f9f9f9';
    document.body.style.backgroundColor = token.colorBgContainer;
  }, [isDarkTheme, token]);

  return (
    <ConfigProvider
      theme={{
        algorithm: isDarkTheme ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
    >
      <Layout>
        <Header className={styles.header}>
          <Flex justify="space-between" align="center">
            <Image
              style={{ borderRadius: '10px' }}
              width={'50px'}
              src={isDarkTheme ? logoDark : logoLight}
              preview={false}
            />

            <Switch
              checkedChildren={<SunOutlined />}
              unCheckedChildren={<MoonOutlined />}
              onChange={() => {
                const newMode = !isDarkTheme;
                setIsDarkTheme(newMode);
                document.documentElement.setAttribute(
                  'data-theme',
                  newMode ? 'dark' : 'light'
                );
              }}
            />
          </Flex>
        </Header>
        <Content className={styles.content}>
          <Flex align="center" justify="center">
            <Form<FieldsTypes>
              name="normal_login"
              className={styles.form}
              initialValues={{
                remember: true,
              }}
              onFinish={() => {}}
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
        </Content>
      </Layout>
    </ConfigProvider>
  );
}

export default App;
