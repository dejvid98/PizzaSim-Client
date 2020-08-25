// Libraries imports
import React from 'react';
import { DollarOutlined, ClockCircleOutlined } from '@ant-design/icons';

// Relative imports
import ingredients from './ingredients';
import styles from './NewOrder.module.scss';
import store from '../store/store';
import {
  updateIng,
  updateTotal,
  updateTime,
  updateStep,
} from '../store/userCart';

const Ing = () => {
  const handleIng = (ing, total, time) => {
    store.dispatch(updateIng({ ing }));
    store.dispatch(updateTotal({ total }));
    store.dispatch(updateTime({ time }));
    store.dispatch(updateStep({ step: 'qty' }));
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className={styles.mainStepWrapper}>
      <h3 className={styles.ingredientHeading}>Ingredients</h3>
      <div className={styles.ingWrapper}>
        {ingredients.map((item, index) => (
          <div
            className={styles.ingredient}
            key={index}
            onClick={() => {
              handleIng(item.name, item.price, item.time);
            }}
          >
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
  );
};

export default Ing;
