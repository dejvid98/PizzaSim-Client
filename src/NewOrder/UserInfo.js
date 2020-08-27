// Libraries imports
import React, { useState } from 'react';
import { Input, Button } from 'antd';
import {
  UserOutlined,
  HomeOutlined,
  PhoneOutlined,
  CheckCircleOutlined,
} from '@ant-design/icons';

// Relative imports
import styles from './UserInfo.module.scss';
import store from '../store/store';
import HTTP from '../Util/HTTP';
import {
  updateAddress,
  updateFirstname,
  updateLastname,
  updatePhonenumber,
  updateOrdersLeft,
  updateQueueTime,
  updateStep,
  updateOrderDate,
  updateOrderId,
  updateStartTime,
} from '../store/userCart';

const UserInfo = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = async () => {
    if (firstname && lastname && Number.isInteger(phonenumber) && address) {
      store.dispatch(updateFirstname({ firstname }));
      store.dispatch(updateLastname({ lastname }));
      store.dispatch(updatePhonenumber({ phonenumber }));
      store.dispatch(updateAddress({ address }));
      const { qty, ing, size, total, time } = store.getState().userCart;

      const resp = await HTTP.post('/order', {
        size,
        ingredient: ing,
        quantity: qty,
        firstname,
        lastname,
        address,
        phonenumber,
        price: total,
        time,
      });
      const { queueTime, ordersLeft, id } = resp.data;
      store.dispatch(updateQueueTime({ queueTime }));
      store.dispatch(updateOrdersLeft({ ordersLeft }));
      store.dispatch(updateStep({ step: 4 }));
      store.dispatch(
        updateOrderDate({ orderDate: new Date().toLocaleString() })
      );
      store.dispatch(updateOrderId({ orderid: id }));
      store.dispatch(updateStartTime({ startTime: queueTime }));
    }
  };

  return (
    <div className={styles.container}>
      <h3>Contact details</h3>
      <div className={styles.formWrapper}>
        <Input
          placeholder='First name'
          prefix={<UserOutlined />}
          className={styles.input}
          size='large'
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
        <Input
          placeholder='Last name'
          prefix={<UserOutlined />}
          className={styles.input}
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          size='large'
        />
        <Input
          placeholder='Address'
          prefix={<HomeOutlined />}
          className={styles.input}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          size='large'
        />
        <Input
          placeholder='Phone number'
          prefix={<PhoneOutlined />}
          className={styles.input}
          value={phonenumber}
          onChange={(e) => setPhonenumber(e.target.value)}
          size='large'
        />

        <Button
          type='primary'
          shape='round'
          icon={<CheckCircleOutlined />}
          size='large'
          onClick={handleSubmit}
        >
          Complete
        </Button>
      </div>
    </div>
  );
};

export default UserInfo;
