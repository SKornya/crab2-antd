import { MoonOutlined, SunOutlined } from '@ant-design/icons';
import { Flex, Image, Switch } from 'antd';
import { Header } from 'antd/es/layout/layout';
import { FunctionComponent } from 'react';

import logoLight from '../../public/logo_light.svg';
import logoDark from '../../public/logo_dark.svg';

import styles from '../App.module.less';
import { Link } from 'react-router-dom';

interface CrabHeaderProps {
  isDarkTheme: boolean;
  toggleTheme: () => void;
}

const CrabHeader: FunctionComponent<CrabHeaderProps> = ({
  isDarkTheme,
  toggleTheme,
}) => {
  return (
    <Header className={styles.header}>
      <Flex justify="space-between" align="center">
        <Link to='/'>
          <Image
            style={{ borderRadius: '10px' }}
            width={'50px'}
            src={isDarkTheme ? logoDark : logoLight}
            preview={false}
          />
        </Link>

        <Switch
          checkedChildren={<SunOutlined />}
          unCheckedChildren={<MoonOutlined />}
          onChange={toggleTheme}
        />
      </Flex>
    </Header>
  );
};

export default CrabHeader;
