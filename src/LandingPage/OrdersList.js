// Libraries imports
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { PlusOutlined, RedoOutlined } from '@ant-design/icons';

// Relative imports
import styles from './OrderList.module.scss';
import HTTP from '../Util/HTTP';

const OrdersList = () => {
  const [orders, setOrders] = useState([]);
  const getAllOrders = async () => {
    const resp = await HTTP.get('/order');
    setOrders(resp.data.data);
  };

  const formatDate = (dateInput) => {
    const date = new Date(dateInput).toLocaleDateString();
    const time = new Date(dateInput).toLocaleTimeString();
    return `${date} ${time}`;
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
          <p>Order</p>
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
                  <p>{formatDate(order.ordertime)}</p>
                  <div>
                    <Button
                      type='secondary'
                      shape='round'
                      icon={<RedoOutlined />}
                      danger
                      size='medium'
                      className={styles.orderAgain}
                    >
                      Order again
                    </Button>
                  </div>
                </div>
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default OrdersList;
