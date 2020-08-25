import React, { useEffect, useState } from 'react';
import styles from './OrderList.module.scss';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import HTTP from '../Util/HTTP';

const OrdersList = () => {
  const [orders, setOrders] = useState([]);
  const getAllOrders = async () => {
    const resp = await HTTP.get('/order');
    setOrders(resp.data.data);
  };
  useEffect(() => {
    getAllOrders();
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h3>Previous orders</h3>
        <Link to='/neworder'>
          <Button
            type='primary'
            shape='round'
            icon={<PlusOutlined />}
            size='large'
            className={styles.newOrder}
          >
            Create an order
          </Button>
        </Link>
      </div>

      <div className={styles.listContainer}>
        <div className={styles.listHeading}>
          <p>Name</p>
          <p>Size</p>
          <p>Ingredient</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Date</p>
        </div>
        <div className={styles.list}>
          {orders
            ? orders.map((order) => (
                <div className={styles.order}>
                  <p>{`${order.firstname} ${order.lastname}`}</p>
                  <p>{order.size}</p>
                  <p>{order.ingredient}</p>
                  <p>{order.quantity}</p>
                  <p>{order.price * order.quantity}$</p>
                  <p>{new Date(order.ordertime).toLocaleDateString()}</p>
                </div>
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default OrdersList;
