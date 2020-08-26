// Libraries imports
import React, { useState, useEffect } from 'react';
import {
  DollarOutlined,
  ClockCircleOutlined,
  DatabaseOutlined,
} from '@ant-design/icons';
import { Steps } from 'antd';

// Relative imports
import styles from './NewOrder.module.scss';
import Navbar from '../Layout/Navbar';
import store from '../store/store';
import Size from './Size';
import Ing from './Ingredients';
import Quantity from './Quantity';
import UserInfo from './UserInfo';
import OrderQueue from './OrderQueue';
import { updateStep } from '../store/userCart';

const NewOrder = () => {
  const [orderStep, setOrderStep] = useState('size');
  const [total, setTotal] = useState(0);
  const [ing, setIng] = useState('');
  const [time, setTime] = useState(0);
  const [qty, setQty] = useState(1);
  const { Step } = Steps;

  const changeStep = (step) => {
    const currentStep = store.getState().userCart.step;
    if (currentStep > step || currentStep !== 4)
      store.dispatch(updateStep({ step }));
  };

  const updateState = (storeState) => {
    const { userCart } = storeState;
    setOrderStep(userCart.step);
    setTotal(userCart.total);
    setTime(userCart.time);
    setIng(userCart.ing);
    setQty(userCart.qty);
  };

  useEffect(() => {
    updateState(store.getState());
    store.subscribe(() => updateState(store.getState()));
  }, []);

  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.heading}>
        <div className={styles.iconWrapper}>
          <p>Total</p>
          <DollarOutlined className={styles.moneyIcon} />
          <p>
            <span className={styles.value}>{total} </span>$
          </p>
        </div>
        <div className={styles.iconWrapper}>
          <p>Time</p>
          <ClockCircleOutlined className={styles.timeIcon} />
          <p>
            <span className={styles.value}>{time} </span>s
          </p>
        </div>

        <div className={styles.iconWrapper}>
          <p>Quantity</p>
          <DatabaseOutlined className={styles.qtyIcon} />
          <p>
            <span className={styles.value}>{qty}</span>
          </p>
        </div>
      </div>
      <div className={styles.stepsWrapper}>
        <Steps current={store.getState().userCart.step} onChange={changeStep}>
          <Step title='Size' />
          <Step title='Ingredients' />
          <Step title='Quantity' />
          <Step title='Contact Details' />
          <Step title='Wait for da pizza!' />
        </Steps>
      </div>

      {orderStep === 0 ? <Size /> : null}
      {orderStep === 1 ? <Ing ing={ing} /> : null}
      {orderStep === 2 ? <Quantity qty={qty} /> : null}
      {orderStep === 3 ? <UserInfo /> : null}
      {orderStep === 4 ? <OrderQueue /> : null}
    </div>
  );
};

export default NewOrder;
