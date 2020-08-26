// Libraries imports
import React from 'react';
import { Button } from 'antd';
import { MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons';

// Relative imports
import styles from './NewOrder.module.scss';
import store from '../store/store';
import { increaseQty, decreaseQty, updateStep } from '../store/userCart';

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
      <Button
        type='primary'
        shape='round'
        size='large'
        onClick={() => {
          store.dispatch(updateStep({ step: 3 }));
        }}
      >
        Continiue
      </Button>
    </div>
  );
};

export default Quantity;
