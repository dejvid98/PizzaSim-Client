import React from 'react';
import styles from './NewOrder.module.scss';
import store from '../store/store';
import { MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { increaseQty, decreaseQty } from '../store/userCart';
const Quantity = ({ qty }) => {
  return (
    <div className={styles.mainStepWrapper}>
      <h3 className={styles.ingredientHeading}>Quantity</h3>
      <div className={styles.ingWrapper}>
        <div className={styles.innerWrapper}>
          <MinusCircleOutlined
            className={styles.decreaseIcon}
            onClick={() => {
              if (qty > 1) store.dispatch(decreaseQty());
            }}
          />
          <p style={{ fontSize: '3.4rem' }}>{qty}</p>
          <PlusCircleOutlined
            className={styles.increaseIcon}
            onClick={() => {
              store.dispatch(increaseQty());
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Quantity;
