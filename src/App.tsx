import { MoonOutlined, SunOutlined } from '@ant-design/icons';
import { Card, ConfigProvider, Switch, theme } from 'antd';
import { useEffect, useState } from 'react';

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
          console.log(isDarkTheme);
        }}
      />

      <Card title="TITLE" />
    </ConfigProvider>
  );
}

export default App;
