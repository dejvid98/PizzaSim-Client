// Libraries imports
import React from 'react';
import { DollarOutlined, ClockCircleOutlined } from '@ant-design/icons';

// Relative imports
import styles from './NewOrder.module.scss';
import store from '../store/store';
import {
  updateTotal,
  updateTime,
  updateStep,
  updateSize,
} from '../store/userCart';

const Size = () => {
  const handleSize = (size, total, time) => {
    store.dispatch(updateSize({ size }));
    store.dispatch(updateTotal({ total }));
    store.dispatch(updateTime({ time }));
    store.dispatch(updateStep({ step: 1 }));
  };
  return (
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
  );
};

export default Size;
