import { ConfigProvider, Layout, theme } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { useState } from 'react';

import styles from './App.module.less';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import CrabHeader from './components/CrabHeader';
import Main from './pages/Main';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(
    !!window.matchMedia('(prefers-color-scheme: dark)')
  );

  const toggleTheme = () => {
    const newMode = !isDarkTheme;
    setIsDarkTheme(newMode);
    document.documentElement.setAttribute(
      'data-theme',
      newMode ? 'dark' : 'light'
    );
  };

  return (
    <BrowserRouter>
      <ConfigProvider
        theme={{
          algorithm: isDarkTheme ? theme.darkAlgorithm : theme.defaultAlgorithm,
        }}
      >
        <Layout>
          <CrabHeader isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
          <Content className={styles.content}>
            <Routes>
              <Route path='/' element={<Main />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<div>Any page</div>} />
            </Routes>
          </Content>
        </Layout>
      </ConfigProvider>
    </BrowserRouter>
  );
}

export default App;
