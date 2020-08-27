// Libraries Imports
import React, { useState, useEffect } from 'react';
import { Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

// Relative imports
import styles from '../LandingPage/LandingPage.module.scss';
import OrdersList from '../LandingPage/OrdersList';
import Navbar from '../Layout/Navbar';
import HTTP from '../Util/HTTP';

const AdminDashoard = () => {
  const [totalEarnedState, setTotalEarnerState] = useState(0);
  const [timeWorkedState, setTimeWorkedState] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const getStats = async () => {
    const resp = await HTTP.get('/order');
    const { data } = resp.data;
    const totalEarned = data.reduce((acc, curr) => acc + curr.price, 0);
    const timeWorked = data.reduce((acc, curr) => acc + curr.time, 0);
    setTotalEarnerState(totalEarned);
    setTimeWorkedState(timeWorked);
  };

  const handleLogin = async () => {
    const resp = await HTTP.post('/admin/login', { email, password });
    if (resp.data.token) setIsLoggedIn(true);
  };

  useEffect(() => {
    getStats();
  }, []);
  return (
    <div className={styles.container}>
      <Navbar />

      {!isLoggedIn ? (
        <div className={styles.loginWrapper}>
          <h3>Login</h3>
          <Input
            size='large'
            placeholder='Email'
            prefix={<UserOutlined />}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input.Password
            size='large'
            placeholder='Password'
            prefix={<LockOutlined />}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type='primary' size='large' onClick={handleLogin}>
            Login
          </Button>
        </div>
      ) : (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div className={styles.stats}>
            <p>
              Total earned
              <span className={styles.value}> {totalEarnedState}</span>$
            </p>
            <p>
              Time worked
              <span className={styles.value}> {timeWorkedState}</span> seconds
            </p>
          </div>
          <div className={styles.secondOrders}>
            <OrdersList />
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashoard;
