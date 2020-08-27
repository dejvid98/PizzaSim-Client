// Libraries imports
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { PlusOutlined, RedoOutlined } from '@ant-design/icons';

// Relative imports
import styles from './OrderList.module.scss';
import HTTP from '../Util/HTTP';
import store from '../store/store';
import {
  updateIng,
  updateSize,
  updateQty,
  updateTotal,
  updateTime,
  updateStep,
} from '../store/userCart';
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

  const handleOrderAgain = (ing, size, qty, total, time) => {
    store.dispatch(updateIng({ ing }));
    store.dispatch(updateSize({ size }));
    store.dispatch(updateQty({ qty }));
    store.dispatch(updateTotal({ total }));
    store.dispatch(updateTime({ time }));
    store.dispatch(updateStep({ step: 3 }));
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
            ? orders.map((order, index) => (
                <div className={styles.order} key={index}>
                  <p>{`${order.firstname} ${order.lastname}`}</p>
                  <p>{order.size}</p>
                  <p>{order.ingredient}</p>
                  <p>{order.quantity}</p>
                  <p>{order.price * order.quantity}$</p>
                  <p>{formatDate(order.ordertime)}</p>
                  <div
                    onClick={() => {
                      handleOrderAgain(
                        order.ingredient,
                        order.size,
                        order.quantity,
                        order.price,
                        order.time
                      );
                    }}
                  >
                    <Link to='/neworder'>
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
                    </Link>
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
