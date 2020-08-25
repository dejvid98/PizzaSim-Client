// Libraries imports
import React, { useState, useEffect } from 'react';
import {
  DollarOutlined,
  ClockCircleOutlined,
  DatabaseOutlined,
} from '@ant-design/icons';

// Relative imports
import styles from './NewOrder.module.scss';
import Navbar from '../Layout/Navbar';
import ingredients from './ingredients';
import store from '../store/store';
import {
  updateStep,
  updateQty,
  updateTime,
  updateTotal,
  updateSize,
  updateIng,
} from '../store/userCart';

const NewOrder = () => {
  const [orderStep, setOrderStep] = useState('size');
  const [total, setTotal] = useState(0);
  const [ing, setIng] = useState('');
  const [time, setTime] = useState(0);
  const [qty, setQty] = useState(1);

  const updateState = (storeState) => {
    const { userCart } = storeState;
    setOrderStep(userCart.step);
    setTotal(userCart.total);
    setTime(userCart.time);
    setIng(userCart.ing);
    setQty(userCart.qty);
  };

  const handleSize = (size, total, time) => {
    store.dispatch(updateSize({ size }));
    store.dispatch(updateTotal({ total }));
    store.dispatch(updateTime({ time }));
    store.dispatch(updateStep({ step: 'ing' }));
  };

  const handleIng = (ing, total, time) => {
    store.dispatch(updateIng({ ing }));
    store.dispatch(updateTotal({ total }));
    store.dispatch(updateTime({ time }));
    store.dispatch(updateStep({ step: 'ing' }));
  };
  useEffect(() => {
    updateState(store.getState());
    store.subscribe(() => updateState(store.getState()));
  }, []);
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
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
      {orderStep === 'size' ? (
        <div className={styles.mainStepWrapper}>
          <h3 className={styles.ingredientHeading}>Size</h3>
          <div className={styles.ingWrapper}>
            <div
              className={styles.sizeWrapper}
              onClick={() => {
                handleSize('small', 200, 1);
              }}
            >
              <p>Small</p>
              <div className={styles.values}>
                <div className={styles.moneyValueWrapper}>
                  <DollarOutlined />
                  <p>200$</p>
                </div>
                <div className={styles.timeValueWrapper}>
                  <ClockCircleOutlined />
                  <p>1s</p>
                </div>
              </div>
            </div>
            <div
              className={styles.sizeWrapper}
              onClick={() => {
                handleSize('medium', 400, 2);
              }}
            >
              <p>Medium</p>
              <div className={styles.values}>
                <div className={styles.moneyValueWrapper}>
                  <DollarOutlined />
                  <p>400$</p>
                </div>
                <div className={styles.timeValueWrapper}>
                  <ClockCircleOutlined />
                  <p>2s</p>
                </div>
              </div>
            </div>
            <div
              className={styles.sizeWrapper}
              onClick={() => {
                handleSize('large', 600, 3);
              }}
            >
              <p>Large</p>
              <div className={styles.values}>
                <div className={styles.moneyValueWrapper}>
                  <DollarOutlined />
                  <p>600$</p>
                </div>
                <div className={styles.timeValueWrapper}>
                  <ClockCircleOutlined />
                  <p>3s</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {orderStep === 'ing' ? (
        <div className={styles.mainStepWrapper}>
          <h3 className={styles.ingredientHeading}>Ingredients</h3>
          <div className={styles.ingWrapper}>
            {ingredients.map((item, index) => (
              <div className={styles.ingredient} key={index}>
                <div className={styles.imageWrapper}>
                  <img src={item.picture} alt='food' />
                </div>
                <div className={styles.textWrapper}>
                  <p className={styles.ingName}>
                    {capitalizeFirstLetter(item.name)}
                  </p>
                  <div className={styles.valuesWrapper}>
                    <div className={styles.moneyValueWrapper}>
                      <DollarOutlined />
                      <p>{item.price}$</p>
                    </div>
                    <div className={styles.timeValueWrapper}>
                      <ClockCircleOutlined />
                      <p>{item.time}s</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      {orderStep === 'qty' ? (
        <div className={styles.mainStepWrapper}>
          <h3 className={styles.ingredientHeading}>Quantity</h3>
          <div className={styles.ingWrapper}></div>
        </div>
      ) : null}
    </div>
  );
};

export default NewOrder;
