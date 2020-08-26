// Libraries imports
import React from 'react';
import { Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';

// Relative imports
import styles from './UserInfo.module.scss';

const UserInfo = () => {
  return (
    <div className={styles.container}>
      <h3>Contact details</h3>
      <div className={styles.nameWrapper}>
        <Input placeholder='First name' prefix={<UserOutlined />} />
        <Input placeholder='Last name' />
      </div>
    </div>
  );
};

export default UserInfo;
